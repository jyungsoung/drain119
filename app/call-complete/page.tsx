"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CallCompletePage() {
  const router = useRouter();

  useEffect(() => {
    // 1. 페이지에 도착하자마자 전화 앱 실행 (대표님 번호)
    window.location.href = "tel:1668-1321";
    
    // 2. 1.5초 뒤에 다시 메인 화면으로 슬쩍 돌려보내기 (고객이 빈 화면에 갇히는 것 방지)
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white">
      <h1 className="text-2xl font-bold mb-4">응급배관119</h1>
      <p className="text-lg animate-pulse">전화 화면으로 연결 중입니다...</p>
    </div>
  );
}
