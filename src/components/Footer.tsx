import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { DISCLAIMER, FOOT_NAV, SITE, WA_MSG, waLink } from '../data/site'
import { gsap, useGSAP, reduced } from '../lib/gsap'
import Social from './Social'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  useGSAP(() => {
    if (reduced()) return
    gsap.from('[data-foot]', { opacity: 0, y: 36, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true } })
  }, { scope: ref })
  return (
    <footer ref={ref} className="bg-navy pb-24 pt-16 text-center text-white sm:pb-12">
      <div className="container-x flex flex-col items-center gap-10">
        <div data-foot className="max-w-3xl">
          <h2 className="!text-white text-3xl sm:text-5xl">Butuh Informasi Layanan ADIVA MEDIKA?</h2>
          <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className="btn mt-6 bg-white text-brand hover:bg-soft">Hubungi via WhatsApp</a>
        </div>
        <div data-foot className="h-px w-full bg-white/15" />
        <div data-foot className="flex flex-col items-center gap-4">
          <span className="rounded-2xl bg-white p-3"><img src="/img/logo.webp" alt="Logo ADIVA MEDIKA" width={180} height={57} loading="lazy" className="h-12 w-auto" /></span>
          <p className="max-w-md text-sm leading-relaxed text-white/75">Layanan khitan modern dan perawatan luka dengan pendekatan homecare yang mengutamakan kenyamanan, perhatian, dan profesionalitas di Mojokerto.</p>
        </div>
        <ul data-foot className="flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {FOOT_NAV.map((n) => (<li key={n.to}><Link to={n.to} className="inline-block py-2 text-white/80 hover:text-white">{n.label}</Link></li>))}
        </ul>
        <address data-foot className="flex flex-col items-center gap-3 text-sm not-italic text-white/80">
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="flex max-w-md items-start gap-2 hover:text-white"><MapPin className="mt-0.5 size-4 shrink-0" />{SITE.address}</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Phone className="size-4" />WhatsApp {SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="size-4" />{SITE.email}</a>
        </address>
        <div data-foot><Social tone="dark" /></div>
        <p data-foot className="max-w-xl text-xs leading-relaxed text-white/55">{DISCLAIMER}<br />© {new Date().getFullYear()} ADIVA MEDIKA. Hak cipta dilindungi.</p>
      </div>
    </footer>
  )
}
