"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function AnimatedCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}

