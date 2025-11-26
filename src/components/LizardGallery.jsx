import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LIZARDS = ['/1Lizard.png', '/2Lizard.png', '/3Lizard.png', '/4Lizard.png', '/5Lizard.png']

function useKeyEscape(handler) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handler()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handler])
}

export default function LizardGallery() {
  const [selected, setSelected] = useState(null)
  useKeyEscape(() => setSelected(null))

  return (
    <div className="relative z-20">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6" aria-hidden>
        {LIZARDS.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setSelected({ src, i })}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl overflow-hidden glass p-3 will-change-transform"
            style={{ padding: 12 }}
          >
            <motion.img
              src={src}
              alt={`Lizard ${i + 1}`}
              loading="lazy"
              className="w-full h-40 object-cover rounded-md lizard-thumb"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && <LizardModal selected={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}

function LizardModal({ selected, onClose }) {
  const backdropRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const onBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 z-40 modal-backdrop flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={backdropRef}
      onMouseDown={onBackdrop}
    >
      <motion.div
        className="relative max-w-3xl w-full rounded-2xl glass p-6"
        role="dialog"
        aria-modal="true"
        initial={{ y: 20, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.98, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        style={{ boxShadow: '0 30px 80px rgba(2,8,20,0.7)' }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-sm opacity-80 hover:opacity-100"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <img src={selected.src} alt="Enlarged lizard" className="w-full h-auto rounded-lg shadow-lg" loading="eager" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Trencher Lizard #{selected.i + 1}</h3>
            <p className="opacity-80 mb-4">
              A premium drop. Hover to reveal hidden animations. This modal uses spring motion, soft shadows, and a subtle blur to feel luxurious.
            </p>

            <div className="flex gap-2">
              <a className="glass px-4 py-2 rounded-md hover:scale-105 transition" href="#buy">Buy</a>
              <button className="px-4 py-2 rounded-md bg-[#081013] text-neon border border-[rgba(0,255,138,0.08)]" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
