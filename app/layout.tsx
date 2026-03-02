import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script" 

export const metadata: Metadata = {
  title: "응급배관119 | 24시간 하수구 막힘 긴급 출동",
  description:
    "하수구 막힘, 변기 막힘, 싱크대 막힘 24시간 긴급 출동! 30분 내 도착, 무료 견적, 1년 A/S 보장. 지금 바로 전화하세요!",
  keywords: "하수구 막힘, 하수구 뚫음, 변기 막힘, 싱크대 막힘, 배관 청소, 긴급 배관, 24시간 배관",
  metadataBase: new URL('https://drain119.co.kr'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://drain119.co.kr',
    title: "응급배관119 | 24시간 하수구 막힘 긴급 출동",
    description: "하수구 막힘, 변기 막힘, 싱크대 막힘 24시간 긴급 출동! 30분 내 도착, 무료 견적, 1년 A/S 보장",
    siteName: "응급배관119",
    images: [{ url: '/plumber-fixing-pipe-in-dark-background-professiona.jpg' }],
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 서치콘솔 소유권 확인 태그 */}
        <meta name="google-site-verification" content="Koq3sahqSt2uhpYqZ5hfSHFcJWlIO3ogL-KCYzoKHuw" />

        {/* 구글 애널리틱스 (GA4) 직접 설치 - 대표님 전용 CCTV */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BB5LGFSVRJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BB5LGFSVRJ');
          `}
        </Script>

        {/* 네이버 애널리틱스 */}
        <Script src="//wcs.pstatic.net/wcslog.js" strategy="afterInteractive" />
        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "182e31a9af9c790";
            if(window.wcs) {
              wcs_do();
            }
          `}
        </Script>
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
