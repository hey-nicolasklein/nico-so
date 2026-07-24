// One-off helper to regenerate SPOTIFY_REFRESH_TOKEN.
//
// Usage:
//   1. In the Spotify dashboard, add this exact Redirect URI to the app:
//        http://127.0.0.1:3000/api/callback/
//      (Spotify no longer accepts `localhost` — the loopback IP is required.
//       See https://developer.spotify.com/documentation/web-api/concepts/redirect_uri)
//   2. Make sure the Next dev server is NOT running (this needs port 3000).
//   3. node scripts/spotify-refresh-token.mjs
//   4. Open the printed URL, log in / approve.
//   5. The new refresh token is written back into .env automatically.
//
// Reads SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET from .env.

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENV_PATH = join(ROOT, ".env");

// Must match a Redirect URI registered in the Spotify app dashboard exactly.
// Spotify requires the loopback IP (127.0.0.1), not `localhost`.
const HOST = "127.0.0.1";
const PORT = 3000;
const REDIRECT_URI = `http://${HOST}:${PORT}/api/callback/`;

// Scopes the site actually uses (top tracks + recently played).
const SCOPES = ["user-top-read", "user-read-recently-played"].join(" ");

const parseEnv = (raw) =>
    Object.fromEntries(
        raw
            .split("\n")
            .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
            .map((l) => {
                const i = l.indexOf("=");
                return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
            })
    );

const envRaw = await readFile(ENV_PATH, "utf8");
const env = parseEnv(envRaw);
const CLIENT_ID = env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error("Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in .env");
    process.exit(1);
}

const authUrl =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI,
    }).toString();

const exchangeCodeForToken = async (code) => {
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
        }).toString(),
    });
    return res.json();
};

const writeRefreshToken = async (token) => {
    let next;
    if (/^SPOTIFY_REFRESH_TOKEN=.*$/m.test(envRaw)) {
        next = envRaw.replace(
            /^SPOTIFY_REFRESH_TOKEN=.*$/m,
            `SPOTIFY_REFRESH_TOKEN=${token}`
        );
    } else {
        next = envRaw.replace(/\n*$/, `\nSPOTIFY_REFRESH_TOKEN=${token}\n`);
    }
    await writeFile(ENV_PATH, next);
};

const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://${HOST}:${PORT}`);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (!code && !error) {
        res.writeHead(404).end();
        return;
    }

    if (error) {
        res.writeHead(400).end(`Authorization failed: ${error}`);
        console.error("Authorization failed:", error);
        server.close();
        process.exit(1);
    }

    const body = await exchangeCodeForToken(code);

    if (!body.refresh_token) {
        res.writeHead(500).end("No refresh_token in response. Check console.");
        console.error("Token exchange response:", body);
        server.close();
        process.exit(1);
    }

    await writeRefreshToken(body.refresh_token);
    res.writeHead(200, { "Content-Type": "text/plain" }).end(
        "Success! Refresh token written to .env. You can close this tab."
    );
    console.log("\n✅ New refresh token written to .env");
    server.close();
    process.exit(0);
});

server.listen(PORT, HOST, () => {
    console.log("\nOpen this URL in your browser and approve access:\n");
    console.log(authUrl + "\n");
});
