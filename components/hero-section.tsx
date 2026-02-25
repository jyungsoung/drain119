"use client";

import { useEffect } from "react"; // 스크립트 실행을 위해 추가
import { Phone, MessageCircle, Clock, Shield, Wrench, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

// 전역 윈도우 객체에 protect_id를 넣기 위한 설정
declare global {
  interface Window {
    protect_id: string;
  }
}

function HeroContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "서울·경기";

  // 화면이 로드될 때 보라웨어 스크립트를 강제로 주입합니다.
  useEffect(() => {
    // 1. ID 설정
    window.protect_id = 'j489';

    // 2. 메인 분석 스크립트 생성 및 삽입
    const script = document.createElement("script");
    script.src = "//script.boraware.kr/protect_script_v2.js";
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    // 3. noscript용 이미지 로그 생성 (이미지 객체로 실행)
    const noscriptImg = new Image();
    noscriptImg.src = "//script.boraware.kr/protect_nbora.php?protect_id=j489";
    noscriptImg.style.display = "none";
    document.body.appendChild(noscriptImg);

    return () => {
      // 컴포넌트가 사라질 때 스크립트 정리 (선택 사항)
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/plumber-fixing-pipe-in-dark-background-professiona.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 상단 배지 */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold mb-6 bg-blue-100 text-blue-900 border-transparent">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            24시간 365일 긴급 출동
          </div>

          {/* 메인 슬로건 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            <span className="text-blue-600">{region}</span> 지역 답답한 배관,
            <br className="hidden md:inline" />
            <span className="text-primary"> 빠르게 </span>뚫어 드립니다!
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            최신장비들고 달려갑니다. <br className="md:hidden" />
            <strong>10초면 전화 연결.</strong> <br />
            전화, 문자 1분 안에 답변을 받아보세요.
          </p>

          {/* 실행 버튼들 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* 1. 전화연결 (빨간색) */}
            <Button size="lg" className="h-16 px-10 text-xl gap-2 bg-red-600 hover:bg-red-700 w-full sm:w-auto animate-bounce" asChild>
              <a href="tel:1668-1321">
                <Phone className="h-6 w-6" />
                전화 연결
              </a>
            </Button>

            {/* 2. 문자상담 (노란색/카카오톤) */}
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl gap-2 border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto" asChild>
              <a href="sms:0105-5776-5882">
                <MessageSquare className="h-6 w-6" />
                문자 상담
              </a>
            </Button>

            {/* 3. 시공사례 (네이버 그린색) */}
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl gap-2 border-[#03C75A] bg-[#03C75A] text-white hover:bg-[#02b351] w-full sm:w-auto" asChild>
              <a href="https://blog.naver.com/carrotpipe" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-6 w-6" />
                시공사례
              </a>
            </Button>
          </div>

          {/* 신뢰 포인트 섹션 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto border-t border-border/50 pt-10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold">{region} 30분 도착</p>
                <p className="text-sm text-muted-foreground">신속한 현장 방문</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold">1년 무상 A/S</p>
                <p className="text-sm text-muted-foreground">철저한 사후관리</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <Wrench className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold">못 뚫으면 0원</p>
                <p className="text-sm text-muted-foreground">확실한 책임 시공</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">불러오는 중...</div>}>
      <HeroContent />
    </Suspense>
  );
}
