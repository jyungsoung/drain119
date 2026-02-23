"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <Button
        asChild
        size="lg"
        className="bg-phone hover:bg-phone/90 text-white rounded-full w-14 h-14 p-0 shadow-lg shadow-phone/30"
      >
        <a href="tel:1668-1321" aria-label="전화 상담">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="bg-kakao hover:bg-kakao/90 text-kakao-foreground rounded-full w-14 h-14 p-0 shadow-lg shadow-kakao/30"
      >
        <a
          href="https://open.kakao.com/o/sEbfmt3h"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
}
