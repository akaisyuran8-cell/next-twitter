/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ローカル開発でIPアクセスしたい場合
  allowedDevOrigins: ["192.168.11.6"],
};

module.exports = nextConfig;
