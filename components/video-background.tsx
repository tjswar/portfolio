"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video slightly
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-15"
          style={{ filter: 'hue-rotate(45deg)' }} // Add purple tint to match theme
        >
          <source src="/videos/tech-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </motion.div>
    </div>
  )
} 