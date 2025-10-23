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
        ],
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
