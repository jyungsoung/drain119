import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">119</span>
              </div>
              <span className="text-xl font-extrabold text-foreground">응급배관119</span>
            </div>
            <p className="text-sm text-muted-foreground">
              하수구 막힘, 변기 막힘, 싱크대 막힘
              <br />
              24시간 긴급 출동 전문 업체
              <br />
              150-65-00639
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">연락처</h4>
            <div className="space-y-3">
              <a
                href="tel:1668-1321"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                1668-1321
              </a>
              <a
                href="sms:010-5776-5882"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="문자 상담"
              >
                <MessageCircle className="w-4 h-4 text-kakao" />
                문자상담
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-foreground mb-4">영업시간</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                연중무휴 24시간 운영
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                서울, 경기, 전 지역 출장
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2025 응급배관119. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
