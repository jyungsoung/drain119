"use client"

import { useState } from "react"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script" // [추가됨] 구글 태그를 넣기 위해 불러옵니다.

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* [구글 광고 추적 코드 시작] 
        Next.js에서는 이렇게 Script 컴포넌트를 써야 오류 없이 작동합니다.
      */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17975405878"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17975405878');
        `}
      </Script>
      {/* [구글 광고 추적 코드 끝] */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm md:text-base">119</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold text-foreground">응급배관119</span>
                <span className="text-xs text-muted-foreground hidden sm:block">24시간 긴급 출동</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                서비스
              </a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                작업과정
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                고객후기
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild className="bg-phone hover:bg-phone/90 text-white">
                <a href="tel:1668-1321">
                  <Phone className="w-4 h-4 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button asChild className="bg-kakao hover:bg-kakao/90 text-kakao-foreground">
                <a href="sms:010-5776-5882">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  문자상담
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  서비스
                </a>
                <a
                  href="#process"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  작업과정
                </a>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  고객후기
                </a>
                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1 bg-phone hover:bg-phone/90 text-white">
                    <a href="tel:1668-1321">
                      <Phone className="w-4 h-4 mr-2" />
                      전화상담
                    </a>
                  </Button>
                  <Button asChild className="flex-1 bg-kakao hover:bg-kakao/90 text-kakao-foreground">
                    <a href="sms:010-5776-5882" aria-label="문자 상담">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      문자상담
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
