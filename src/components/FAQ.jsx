import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FUNFACT FAQ
 * - Collapsible panel with "Phantom-style" animation: blur, opacity fade, vertical slide
 */

const article = `Why Do Trenchers and Crypto Enthusiasts Share a Fascination with Conspiracies?
By Dr. A. R. Mendelson, Behavioral Scientist

Interestingly, trenchers—those drawn to countercultural, underground lifestyles—and cryptocurrency enthusiasts often share a curious trait: engagement with conspiratorial thinking. Psychological research helps explain this overlap.

Both groups operate in environments where mainstream narratives seem opaque or untrustworthy. Trenchers question societal norms, while crypto users navigate decentralized, rapidly evolving financial systems. In such contexts, humans’ natural tendency to detect patterns can foster conspiratorial explanations.

Social dynamics further reinforce this tendency. Online communities and subcultural networks amplify alternative theories, strengthened by confirmation bias and the satisfaction of “uncovering hidden truths.”

In short, the shared fascination with conspiracies among these groups isn’t mere coincidence. It reflects a combination of cognitive bias, skepticism of authority, and social reinforcement—an amusing but scientifically explainable connection.`

export default function FAQ() {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">FUNFACT FAQ</h2>
        <button
          onClick={() => setOpen((s) => !s)}
          className="glass px-3 py-2 rounded-full hover:scale-105 transition will-change-transform"
          aria-expanded={open}
        >
          {open ? '▲' : '▼'}
        </button>
      </div>

      <div className="glass rounded-xl overflow-hidden p-1">
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/30 p-6"
            >
              <article className="prose prose-invert max-w-none text-sm leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {article}
              </article>
            </motion.div>
          ) : (
            <motion.div
              key="teaser"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <p className="opacity-80 text-sm">Click to expand the full article about the curious overlap between trenchers and crypto enthusiasts.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
