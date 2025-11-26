import React from 'react'
import Background from './components/Background'
import Ticker from './components/Ticker'
import LizardGallery from './components/LizardGallery'
import FAQ from './components/FAQ'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Background />

      <header className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="glass px-3 py-2 rounded-full flex items-center gap-3 float-shadow">
            <img src="/1Lizard.png" alt="logo lizard" className="w-8 h-8 rounded" loading="lazy" />
            <div className="text-sm">
              <div className="text-xs opacity-70">Token</div>
              <div className="font-semibold">Trencher Lizard</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-4 items-center ml-4">
            <a className="text-sm opacity-85 hover:opacity-100 transition" href="#about">About</a>
            <a className="text-sm opacity-85 hover:opacity-100 transition" href="#faq">FUNFACT FAQ</a>
            <a className="text-sm opacity-85 hover:opacity-100 transition" href="#gallery">Gallery</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <a href="https://x.com/kalleicey1" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="glass px-3 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition will-change-transform">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M23 4.5c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.7.4-1.6.7-2.4.8C19.6 3 18.4 2.5 17.1 2.5c-2 0-3.5 1.7-3.2 3.6C10.2 6 7.1 4.7 5.1 2.6 3.9 4 4.3 6 5.9 6.8c-.6 0-1.2-.2-1.7-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.5.1-1 .2-1.6.1.4 1.4 1.6 2.3 3 2.3C8 15 6.4 15.7 4.6 16.1c1.9 1.2 4.1 1.9 6.5 1.9 7.9 0 12.2-6.6 12.2-12.3v-.6c.8-.6 1.5-1.3 2.1-2.2z" fill="currentColor"/></svg>
              <span className="text-xs opacity-90">X</span>
            </a>
          </div>

          <a href="https://pump.fun" target="_blank" rel="noreferrer" className="glass px-3 py-2 rounded-full neon-text text-sm hover:scale-105 transition float-shadow">
            Buy on pump.fun
          </a>

          <Ticker />
        </div>
      </header>

      <main className="relative z-20 px-6 pt-36 pb-24 max-w-6xl mx-auto">
        <section id="hero" className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">Trencher Lizard — $TCA</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">A premium memecoin experience. Ultra-smooth, glossy UI inspired by Phantom.</p>
        </section>

        <section id="gallery" className="mb-12">
          <LizardGallery />
        </section>

        <section id="faq" className="mb-12">
          <FAQ />
        </section>

        <footer className="mt-20 text-center opacity-70 text-sm">
          © {new Date().getFullYear()} Trencher Lizard — built with care & motion.
        </footer>
      </main>
    </div>
  )
}
