/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
            },
            {
                protocol: "https",
                hostname: "*.strapiapp.com",
            },
            {
                protocol: "https",
                hostname: "*.strapi.cloud",
            },
            // Local Strapi development
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            // Remote Strapi Cloud
            {
                protocol: "https",
                hostname: "renowned-bubble-b7365553d5.strapiapp.com",
            },
        ],
        qualities: [25, 50, 75, 100],
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "photos.nico.so",
                    },
                ],
                destination: "https://glass.photo/heynico",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
