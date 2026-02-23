"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HeroContent() {
  const searchParams = useSearchParams();
  // 주소창에 ?region=지역명 이 있으면 그 값을 쓰고, 없으면 '서울·경기'를 기본값으로 사용합니다.
  const region = searchParams.get("region") || "서울·경기";

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* 상단 배지 */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors border-transparent bg-blue-100 text-blue-900 hover:bg-blue-200">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            24시간 365일 긴급 출동
          </div>
          
          {/* 메인 슬로건 (수정된 부분) */}
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 leading-tight">
            <span className="text-blue-900">{region}</span> 지역 답답한 배관,
            <br className="hidden sm:inline" />
            <span className="text-blue-600"> 빠르게 도착해서 해소</span>시켜드리겠습니다.
          </h1>

          {/* 보조 설명 */}
          <p className="text-lg text-gray-600 md:text-xl max-w-[700px] mx-auto">
            막혔으면? 뚫어야죠. <br className="sm:hidden" />
            <strong>10초면 전화 연결됩니다.</strong> <br />
            전화, 문자, 카톡으로 1분 안에 답변을 받아보세요.
          </p>

          {/* 클릭 유도 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-red-600 hover:bg-red-700 shadow-lg animate-bounce" asChild>
              <Link href="tel:1668-1321">
                <Phone className="h-5 w-5" />
                전화 연결
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black border-2" asChild>
              <Link href="sms:1668-1321">
                <MessageSquare className="h-5 w-5" />
                문자 상담
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 border-2" asChild>
              <Link href="https://pf.kakao.com/_Example" target="_blank">
                <MessageSquare className="h-5 w-5 text-yellow-500" />
                카톡 상담
              </Link>
            </Button>
          </div>

          {/* 하단 신뢰 포인트 (지역명 연동) */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 pt-4">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>{region} 전 지역 30분 도착 보장</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>1년 무상 A/S 보장</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>못 뚫으면 0원 (비용 미청구)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 배경 디자인 효과 (생략 가능) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}

// Next.js에서 파라미터를 읽을 때 에러를 방지하기 위해 Suspense로 감싸줍니다.
export default function HeroSection() {
  return (
    <Suspense fallback={<div className="py-20 text-center">불러오는 중...</div>}>
      <HeroContent />
    </Suspense>
  );
}
