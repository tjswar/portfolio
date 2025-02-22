"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillProgressProps {
  name: string
  percentage: number
  color?: string
}

export function SkillProgress({ name, percentage, color = "purple" }: SkillProgressProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      setProgress(percentage)
    }
  }, [isInView, percentage])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color === "purple" ? "bg-purple-500" : "bg-pink-500"}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

