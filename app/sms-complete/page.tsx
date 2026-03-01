"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SmsCompletePage() {
  const router = useRouter();

  useEffect(() => {
    // 문자 앱 실행 (기존 문자 상담 번호)
    window.location.href = "sms:01057765882";
    
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white">
      <h1 className="text-2xl font-bold mb-4">응급배관119</h1>
      <p className="text-lg animate-pulse">문자 상담 화면으로 연결 중입니다...</p>
    </div>
  );
}
