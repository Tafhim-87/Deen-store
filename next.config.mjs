/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // pathname: '/**', // Allow all paths from this hostname
      },
    ],
  },
};

export default nextConfig;