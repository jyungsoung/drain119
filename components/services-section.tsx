"use client"

import { Droplets, Home, Wrench, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    icon: Droplets,
    title: "하수구 막힘",
    description: "화장실, 세면대, 욕조 등 모든 하수구 막힘 해결",
    image: "/clogged-drain-plumber-fixing.jpg",
  },
  {
    icon: Home,
    title: "싱크대 막힘",
    description: "주방 싱크대 기름때, 음식물 막힘 완벽 해결",
    image: "/kitchen-sink-drain-cleaning.jpg",
  },
  {
    icon: Wrench,
    title: "변기 막힘",
    description: "변기 막힘, 역류 문제 신속하게 해결",
    image: "/toilet-repair-plumber.jpg",
  },
  {
    icon: Building2,
    title: "배관 청소",
    description: "오래된 배관 고압세척, 관로 청소 전문",
    image: "/pipe-cleaning-high-pressure.jpg",
  },
]

export default function ServicesSection() {
  useScrollReveal()
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">전문 서비스</h2>
          <p className="text-muted-foreground">어떤 막힘도 해결해 드립니다</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="scroll-reveal bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
