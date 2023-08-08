/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    publicRuntimeConfig: {
        trailingSlash: true,
    },
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    }
}
module.exports = nextConfig;
