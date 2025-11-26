import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Background component:
 * - full-screen background image (WEBSITEBACKROUND.png)
 * - subtle parallax based on mouse movement and scroll
 * - preloaded via index.html
 */

export default function Background() {
  const containerRef = useRef(null)

  // framer motion values for smooth GPU-accelerated transforms
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(mx, { stiffness: 80, damping: 18 })
  const ry = useSpring(my, { stiffness: 80, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const el = containerRef.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const px = ((e.clientX - left) / width - 0.5) * 2 // -1..1
      const py = ((e.clientY - top) / height - 0.5) * 2
      // moderate parallax
      mx.set(px * 8)
      my.set(py * 8)
    }

    const el = containerRef.current
    el?.addEventListener('mousemove', onMove)
    return () => el?.removeEventListener('mousemove', onMove)
  }, [mx, my])

  // scroll parallax
  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY
      // we will map to a tiny translateY on the background
      const y = Math.min(60, offset * 0.07)
      my.set(-y / 6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [my])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 will-change-transform">
      <motion.div
        style={{
          translateX: rx,
          translateY: ry,
          scale: 1.02
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 14 }}
        className="absolute inset-0"
      >
        {/* Use an img tag so browser preloading and caching are used.
            We rely on index.html preloading the same path. */}
        <img
          src="/WEBSITEBACKROUND.png"
          alt="background"
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style={{ transform: 'translateZ(0)' }}
        />
        {/* A subtle overlay to increase contrast and give the glossy feel */}
        <div style={{ pointerEvents: 'none' }} className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </motion.div>
    </div>
  )
}
