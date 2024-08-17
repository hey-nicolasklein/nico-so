/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["storage.googleapis.com", "i.scdn.co"],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'photos.nico.so',
                    },
                ],
                destination: 'https://glass.photo/heynico',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
