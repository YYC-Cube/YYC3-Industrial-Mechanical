/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：产出纯静态站点，供 GitHub Pages 托管（自定义域名 im.yyc3.top）
  output: "export",
  // 每个路由输出为目录形式（/modules/01/ -> /modules/01/index.html），
  // 便于静态服务器直接命中，避免刷新 404
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL || "https://im.yyc3.top",
  },
};

export default nextConfig;
