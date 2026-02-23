"use client"

import { Phone, MapPin, Wrench, CheckCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    icon: Phone,
    title: "전화 / 문자 상담",
    description: "24시간 언제든 연락주세요",
  },
  {
    icon: MapPin,
    title: "30분 내 출동",
    description: "가장 가까운 기술진이 출동합니다",
  },
  {
    icon: Wrench,
    title: "현장 점검 & 작업",
    description: "무료 견적 후 작업 진행",
  },
  {
    icon: CheckCircle,
    title: "완료 후 결제",
    description: "작업 완료 확인 후 결제",
  },
]

export default function ProcessSection() {
  useScrollReveal()

  return (
    <section id="process" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">서비스 진행 과정</h2>
          <p className="text-muted-foreground">간단한 4단계로 해결됩니다</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-border" />
              )}

              {/* Step Number & Icon */}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
