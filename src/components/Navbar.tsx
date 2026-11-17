import { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { NAV, waLink, WA_MSG } from '../data/site'
import { gsap, useGSAP, reduced } from '../lib/gsap'
import Social from './Social'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  useGSAP(() => {
    if (!reduced()) gsap.from('[data-nav-in]', { y: -24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 })
  }, { scope: root })

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('[data-menu-item]')
    const dur = reduced() ? 0 : 0.5
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to('[data-menu]', { autoAlpha: 1, duration: dur, ease: 'power2.out' })
      gsap.fromTo(items, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: dur, stagger: reduced() ? 0 : 0.06, ease: 'power3.out', delay: 0.1 })
      gsap.to('[data-bar="1"]', { y: 5, rotate: 45, duration: dur * 0.6 })
      gsap.to('[data-bar="2"]', { y: -5, rotate: -45, duration: dur * 0.6 })
    } else {
      document.body.style.overflow = ''
      gsap.to('[data-menu]', { autoAlpha: 0, duration: dur * 0.7, ease: 'power2.in' })
      gsap.to('[data-bar]', { y: 0, rotate: 0, duration: dur * 0.6 })
    }
  }, { scope: root, dependencies: [open] })

  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-[13px] font-semibold transition-colors ${isActive ? 'bg-brand text-white' : 'text-navy hover:bg-soft'}`

  return (
    <div ref={root}>
      <header data-nav-in className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(12px,env(safe-area-inset-top))] sm:px-6">
        <nav aria-label="Navigasi utama" className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-soft backdrop-blur-md">
          <Link to="/" aria-label="ADIVA MEDIKA — Beranda" className="shrink-0">
            <img src="img/logo.webp" alt="ADIVA MEDIKA Rawat Luka & Khitan Modern" width={140} height={45} className="h-10 w-auto" />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (<li key={n.to}><NavLink to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink></li>))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="hidden xl:block"><Social /></div>
            <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !min-h-10 !px-5 sm:inline-flex">Konsultasi</a>
            <button type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)} className="grid size-12 place-items-center rounded-full bg-soft lg:hidden">
              <span className="block w-5">
                <span data-bar="1" className="mb-[6px] block h-0.5 rounded bg-navy" />
                <span data-bar="2" className="block h-0.5 rounded bg-navy" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div data-menu aria-hidden={!open} className="invisible fixed inset-0 z-40 flex h-dvh flex-col items-center justify-center bg-white/95 px-6 text-center opacity-0 backdrop-blur-md lg:hidden">
        <ul className="flex flex-col items-center gap-1">
          {[...NAV, { to: '/homecare', label: 'Homecare' }, { to: '/galeri', label: 'Galeri' }, { to: '/ulasan', label: 'Ulasan' }].map((n) => (
            <li key={n.to} data-menu-item><NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block px-4 py-2 text-2xl font-extrabold ${isActive ? 'text-brand' : 'text-navy'}`}>{n.label}</NavLink></li>
          ))}
        </ul>
        <div data-menu-item className="mt-8 flex flex-col items-center gap-5">
          <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Konsultasi Sekarang</a>
          <Social />
        </div>
      </div>
    </div>
  )
}
