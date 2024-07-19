/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactStrictMode: true,
  distDir: "build",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd10uth61hedy2t.cloudfront.net',
        
      },
    ],
  },
};
export default nextConfig;
