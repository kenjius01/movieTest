/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'api.themoviedb.org',
            'www.themoviedb.org',
            'www.youtube.com',
            'image.tmdb.org',
        ],
    },
};

module.exports = nextConfig;
