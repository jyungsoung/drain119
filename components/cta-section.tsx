import { Phone, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">지금 바로 연락하세요!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 text-balance">
            막힌 배관, 더 이상 고민하지 마세요
          </h2>
          <p className="text-primary-foreground/80 mb-8">24시간 긴급 출동 · 무료 견적 · 1년 A/S 보장</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-phone hover:bg-phone/90 text-white text-lg px-8"
            >
              <a href="tel:1668-1321">
                <Phone className="w-5 h-5 mr-2" />
                1668-1321
              </a>
            </Button>
            <Button asChild size="lg" className="bg-kakao hover:bg-kakao/90 text-kakao-foreground text-lg px-8">
              <a href="sms:010-5776-5882" aria-label="문자 상담">
                <MessageCircle className="w-5 h-5 mr-2" />
                문자상담
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
