import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script" // GTM 삽입을 위해 추가

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
        {/* Google Tag Manager (Head) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGXL493Q');`}
        </Script>
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGXL493Q"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
