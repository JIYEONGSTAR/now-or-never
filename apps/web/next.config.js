/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@non/ui"], // 추가
};

module.exports = nextConfig;
