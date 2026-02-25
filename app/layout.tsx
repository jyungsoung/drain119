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
  generator: 'v0.app',
  metadataBase: new URL('https://drain119.co.kr'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://drain119.co.kr',
    title: "응급배관119 | 24시간 하수구 막힘 긴급 출동",
    description: "하수구 막힘, 변기 막힘, 싱크대 막힘 24시간 긴급 출동! 30분 내 도착, 무료 견적, 1년 A/S 보장",
    siteName: "응급배관119",
    images: [
      {
        url: '/plumber-fixing-pipe-in-dark-background-professiona.jpg',
        width: 1200,
        height: 630,
        alt: '응급배관119 - 하수구 막힘 전문가',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "응급배관119 | 24시간 하수구 막힘 긴급 출동",
    description: "하수구 막힘, 변기 막힘, 싱크대 막힘 24시간 긴급 출동! 30분 내 도착, 무료 견적, 1년 A/S 보장",
    images: ['/plumber-fixing-pipe-in-dark-background-professiona.jpg'],
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
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        {/* 보라웨어 부정클릭 방지 설정 (ID: j489 반영) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var protect_id = 'j489';`,
          }}
        />
        <Script
          src="//script.boraware.kr/protect_script_v2.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        
        {/* 보라웨어 noscript 로그 기록 (ID: j489 반영) */}
        <noscript>
          <img 
            src="//script.boraware.kr/protect_nbora.php?protect_id=j489" 
            style={{ display: 'none', width: 0, height: 0 }} 
            border="0" 
            alt="boraware_log"
          />
        </noscript>
      </body>
    </html>
  )
}
