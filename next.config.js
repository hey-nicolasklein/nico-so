/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["storage.googleapis.com", "i.scdn.co"],
    },
};

module.exports = nextConfig;
