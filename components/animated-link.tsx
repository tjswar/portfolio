"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function AnimatedLink({ href, children, className, external = true }: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      className={cn("inline-block", className)}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </motion.a>
  )
} 