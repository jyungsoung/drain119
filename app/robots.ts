import { MetadataRoute } from 'next'

// 앱 라우트를 정적 내보내기 모드에서 사용하려면 이 라우트를 강제 정적으로 설정합니다.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml', // 실제 도메인으로 변경하세요
  }
}
