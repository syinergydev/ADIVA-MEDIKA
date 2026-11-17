import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from '../lib/gsap'
import Navbar from './Navbar'
import Footer from './Footer'
import { WhatsAppIcon } from './Icons'
import { waLink } from '../data/site'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0); const t = setTimeout(() => ScrollTrigger.refresh(), 300); return () => clearTimeout(t) }, [pathname])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Lewati ke konten</a>
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp ADIVA MEDIKA" className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-[#128C4A] text-white shadow-soft transition duration-200 hover:scale-105 active:scale-95">
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  )
}
