"use client"

import { useEffect, useRef } from "react"

interface Enemy {
  x: number
  y: number
  direction: number
  row: number
}

interface Bullet {
  x: number
  y: number
  speed: number
  isEnemy?: boolean
}

interface Player {
  x: number
  y: number
  lastShot: number
}

export function GalaxianBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const enemiesRef = useRef<Enemy[]>([])
  const bulletsRef = useRef<Bullet[]>([])
  const playerRef = useRef<Player>({ x: 0, y: 0, lastShot: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return
      
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
      initializeGame()
    }

    const initializeGame = () => {
      playerRef.current = {
        x: canvas.width / 2,
        y: canvas.height - 100,
        lastShot: 0
      }

      enemiesRef.current = []
      bulletsRef.current = []
      
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 10; col++) {
          enemiesRef.current.push({
            x: (col * 30) + (canvas.width - 300) / 2,
            y: row * 30 + 100,
            direction: 1,
            row: row
          })
        }
      }
    }

    const drawPixelShip = (x: number, y: number, isPlayer: boolean) => {
      const pixelSize = 2
      const color = isPlayer ? "#9D4EDD" : "#4ECDC4"
      
      ctx.fillStyle = color
      
      const pixels = isPlayer ? [
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,0,0],
        [0,1,1,0,1,0,1,1,0],
        [1,1,0,0,1,0,0,1,1]
      ] : [
        [0,0,0,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,0],
        [1,0,1,0,1,0,1,0,1]
      ]

      pixels.forEach((row, i) => {
        row.forEach((pixel, j) => {
          if (pixel) {
            ctx.fillRect(
              x + (j * pixelSize) - (pixels[0].length * pixelSize) / 2,
              y + (i * pixelSize),
              pixelSize,
              pixelSize
            )
          }
        })
      })
    }

    const drawBullet = (bullet: Bullet) => {
      ctx.fillStyle = bullet.isEnemy ? "#FF6B6B" : "#9D4EDD"
      // Draw pixel bullet (2x4 pixels)
      ctx.fillRect(bullet.x - 1, bullet.y - 2, 2, 4)
    }

    const updateBullets = () => {
      bulletsRef.current = bulletsRef.current.filter(bullet => {
        bullet.y += bullet.speed
        drawBullet(bullet)
        return bullet.y > 0 && bullet.y < canvas.height
      })
    }

    const playerShoot = () => {
      const now = Date.now()
      if (now - playerRef.current.lastShot > 500) { // Shoot every 500ms
        bulletsRef.current.push({
          x: playerRef.current.x,
          y: playerRef.current.y - 10,
          speed: -5
        })
        playerRef.current.lastShot = now
      }
    }

    const enemyShoot = () => {
      // Random enemy shoots
      if (Math.random() < 0.02 && enemiesRef.current.length > 0) {
        const shooter = enemiesRef.current[Math.floor(Math.random() * enemiesRef.current.length)]
        bulletsRef.current.push({
          x: shooter.x,
          y: shooter.y + 10,
          speed: 3,
          isEnemy: true
        })
      }
    }

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move and draw player
      const targetX = canvas.width / 2 + Math.sin(Date.now() * 0.001) * 50
      playerRef.current.x += (targetX - playerRef.current.x) * 0.05
      drawPixelShip(playerRef.current.x, playerRef.current.y, true)

      // Player automatically shoots
      playerShoot()
      
      // Enemies shoot randomly
      enemyShoot()

      // Update and draw bullets
      updateBullets()

      // Update and draw enemies
      enemiesRef.current = enemiesRef.current.map(enemy => {
        const newX = enemy.x + (enemy.direction * 0.3)
        const shouldChangeDirection = 
          enemiesRef.current.some(e => 
            e.x + e.direction * 0.3 > canvas.width - 50 || 
            e.x + e.direction * 0.3 < 50
          )

        const waveOffset = Math.sin(Date.now() * 0.002 + enemy.row * 0.5) * 5
        drawPixelShip(enemy.x, enemy.y + waveOffset, false)

        return {
          ...enemy,
          x: shouldChangeDirection ? enemy.x : newX,
          direction: shouldChangeDirection ? -enemy.direction : enemy.direction
        }
      })

      animationFrameRef.current = requestAnimationFrame(updateAndDraw)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    updateAndDraw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.3,
        width: '100%',
        height: '100%'
      }}
    />
  )
} 