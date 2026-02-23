"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const reviews = [
  {
    name: "김**",
    location: "서울 강남구",
    rating: 5,
    text: "새벽에 화장실이 막혀서 급하게 전화했는데 30분만에 오셔서 바로 해결해주셨어요. 가격도 합리적이고 친절하셔서 감사합니다!",
    service: "하수구 막힘",
  },
  {
    name: "이**",
    location: "경기 분당",
    rating: 5,
    text: "싱크대가 자꾸 역류해서 걱정했는데 원인을 찾아서 깔끔하게 해결해주셨어요. 1년 A/S까지 있어서 안심됩니다.",
    service: "싱크대 막힘",
  },
  {
    name: "박**",
    location: "서울 송파구",
    rating: 5,
    text: "카톡으로 상담받고 바로 예약했어요. 시간 약속도 정확하게 지켜주시고 작업도 깔끔하게 해주셨습니다. 강추!",
    service: "변기 막힘",
  },
  {
    name: "최**",
    location: "인천 연수구",
    rating: 5,
    text: "오래된 빌라라 배관이 많이 막혔는데 고압세척으로 완전히 시원하게 뚫어주셨어요. 다음에도 또 부를게요!",
    service: "배관 청소",
  },
]

export default function ReviewsSection() {
  useScrollReveal()
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            고객님께서 증명해 주신
            <br />
            <span className="text-primary">서비스 만족도 99%</span>
          </h2>
          <p className="text-muted-foreground">실제 고객님들의 생생한 후기</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="scroll-reveal bg-card border-border" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground text-sm mb-4 line-clamp-4">{review.text}</p>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.location} · {review.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
