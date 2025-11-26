import React from 'react'
import { motion } from 'framer-motion'

/**
 * $TCA ticker bubble with neon, cloudy font feel.
 * Floating (bob) animation is provided via CSS keyframes and a little framer motion entrance.
 */

export default function Ticker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      className="glass px-3 py-2 rounded-full flex items-center gap-3 neon-text float-shadow will-change-transform"
      style={{ minWidth: 110 }}
    >
      <div
        className="rounded-full bg-[#081013] px-3 py-1 text-sm font-semibold"
        style={{
          color: 'var(--neon)',
          boxShadow: '0 6px 22px rgba(0,255,138,0.12), inset 0 -1px 0 rgba(255,255,255,0.02)',
          border: '1px solid rgba(0,255,138,0.08)',
          animation: 'bob 4s ease-in-out infinite'
        }}
        aria-hidden
      >
        $TCA
      </div>

      <div className="text-xs opacity-80">
        <div className="leading-none">0.000123</div>
        <div className="opacity-60 text-[10px]">~ Live</div>
      </div>
    </motion.div>
  )
}
