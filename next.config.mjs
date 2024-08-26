/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
