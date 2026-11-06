/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        qualities: [75, 90, 95],
            remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],


    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
