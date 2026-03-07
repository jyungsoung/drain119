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

// SEO를 위한 서울/경기권 스키마 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "name": "응급배관119",
  "image": "https://drain119.co.kr/plumber-fixing-pipe-in-dark-background-professiona.jpg",
  "@id": "https://drain119.co.kr",
  "url": "https://drain119.co.kr",
  "telephone": "010-XXXX-XXXX", // 사장님 번호로 수정하세요
  "priceRange": "₩",
  "description": "서울 및 경기 전 지역 24시간 긴급 출동! 하수구, 변기, 싱크대 막힘 해결 전문",
  "areaServed": [
    { "@type": "State", "name": "Seoul" },
    { "@type": "State", "name": "Gyeonggi-do" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager - 요구하신 대로 head 최상단에 추가 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PR3KW3JD');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* 구글 서치콘솔 소유권 확인 태그 */}
        <meta name="google-site-verification" content="Koq3sahqSt2uhpYqZ5hfSHFcJWlIO3ogL-KCYzoKHuw" />

        {/* 구글 애널리틱스(GA4) + 구글 광고(Ads) 통합 설치 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BB5LGFSVRJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-BB5LGFSVRJ');
            gtag('config', 'AW-17975405878');
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

        {/* 당근마켓 픽셀 코드 추가 */}
        <Script src="https://karrot-pixel.business.daangn.com/karrot-pixel.js" strategy="afterInteractive" />
        <Script id="karrot-pixel-init" strategy="afterInteractive">
          {`
            window.karrotPixel = window.karrotPixel || [];
            window.karrotPixel.init('1772547415530815001');
            window.karrotPixel.track('ViewPage');
          `}
        </Script>

        {/* 구글 검색용 스키마 데이터 삽입 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) - 요구하신 대로 body 바로 뒤에 추가 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PR3KW3JD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
