// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Next.js 빌드 출력을 정적 HTML 파일로 변경
  output: 'export', 
  
  // 2. 이미지는 정적 빌드 시 최적화되지 않으므로 unoptimized를 유지
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;