"use client"

import { useEffect, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: 15000, suffix: "+", label: "누적 작업 건수" },
  { value: 99, suffix: "%", label: "고객 만족도" },
  { value: 30, suffix: "분", label: "평균 도착 시간" },
  { value: 10, suffix: "년+", label: "업계 경력" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  useScrollReveal()
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            숫자가 증명하는 <span className="text-primary">응급배관119</span>
          </h2>
          <p className="text-muted-foreground">믿을 수 있는 실적과 경험</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="scroll-reveal text-center" style={{ transitionDelay: `${index * 100}ms` }}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
