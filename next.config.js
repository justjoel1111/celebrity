/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out static export for now to fix the build
  // output: 'export',
  httpAgentOptions: {
    timeout: 60000,
  },
  compiler: {
    swcMinify: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
