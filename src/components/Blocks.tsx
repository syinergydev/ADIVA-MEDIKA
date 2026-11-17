import { useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Plus, MapPin, Mail } from 'lucide-react'
import { SITE, TESTIMONIALS, waLink, WA_MSG } from '../data/site'
import { gsap, useGSAP, reduced } from '../lib/gsap'
import { WhatsAppIcon } from './Icons'

export function Heading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div data-reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-5xl">{title}</h2>
      {text && <p className="lead mt-4">{text}</p>}
    </div>
  )
}

export function WaButton({ msg = WA_MSG.general, children = 'Konsultasi Sekarang', className = '' }: { msg?: string; children?: ReactNode; className?: string }) {
  return (
    <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${className}`}>
      <WhatsAppIcon className="size-5" />{children}
    </a>
  )
}

export function PageHero({ eyebrow, title, text, image, alt, msg }: { eyebrow: string; title: string; text: string; image?: string; alt?: string; msg?: string }) {
  const ref = useRef<HTMLElement>(null)
  useGSAP(() => {
    if (reduced()) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('[data-h]', { y: 36, opacity: 0, duration: 0.9, stagger: 0.12 })
    gsap.from('[data-hero-img]', { scale: 1.08, opacity: 0, duration: 1.4, ease: 'power3.out' })
  }, { scope: ref })
  return (
    <section ref={ref} className="hero-bg relative overflow-hidden px-0 pb-14 pt-32 text-center sm:pt-40">
      <div aria-hidden="true" className="ambient pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="container-x relative flex flex-col items-center">
        <span data-h className="eyebrow">{eyebrow}</span>
        <h1 data-h className="max-w-4xl text-4xl sm:text-6xl">{title}</h1>
        <p data-h className="lead mt-5">{text}</p>
        <div data-h className="mt-7 flex flex-wrap justify-center gap-3"><WaButton msg={msg} /></div>
        {image && (
          <div data-hero-img className="mt-12 w-full max-w-md overflow-hidden rounded-[2rem] border border-brand/10 bg-white shadow-soft">
            <img src={image} alt={alt} className="w-full" fetchPriority="high" />
          </div>
        )}
      </div>
    </section>
  )
}

export function CtaBand({ title = 'Butuh Informasi Layanan ADIVA MEDIKA?', msg = WA_MSG.general, text = 'Hubungi tim ADIVA MEDIKA untuk mendapatkan informasi layanan dan konsultasi awal.' }: { title?: string; msg?: string; text?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div data-reveal className="rounded-[2rem] bg-gradient-to-br from-brand to-navy px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-3xl !text-white text-3xl sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{text}</p>
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-white text-brand hover:bg-soft"><WhatsAppIcon className="size-5" />Hubungi ADIVA MEDIKA</a>
        </div>
      </div>
    </section>
  )
}

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3 text-left">
      {items.map(([q, a], i) => (
        <div key={q} data-reveal className="card !p-0">
          <h3 className="!text-base">
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-3 text-left font-bold text-navy">
              {q}<Plus className={`size-5 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`} />
            </button>
          </h3>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75">{a}</p>}
        </div>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [i, setI] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const start = useRef(0)
  const go = (n: number) => setI((n + TESTIMONIALS.length) % TESTIMONIALS.length)
  useGSAP(() => {
    if (!reduced()) gsap.fromTo('[data-quote]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
  }, { scope: ref, dependencies: [i] })
  return (
    <div ref={ref} role="group" aria-roledescription="carousel" aria-label="Ulasan Google Maps" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(i - 1); if (e.key === 'ArrowRight') go(i + 1) }}
      onPointerDown={(e) => (start.current = e.clientX)}
      onPointerUp={(e) => { const d = e.clientX - start.current; if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1)) }}
      className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-14">
      <p className="text-3xl text-sky" aria-hidden="true">★★★★★</p>
      <blockquote data-quote aria-live="polite" className="mt-5 min-h-[7rem] text-xl font-bold leading-snug text-navy sm:text-3xl">“{TESTIMONIALS[i]}”</blockquote>
      <p className="mt-3 text-sm text-ink/60">Ulasan Google Maps</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(i - 1)} aria-label="Ulasan sebelumnya" className="grid size-12 place-items-center rounded-full bg-soft text-brand hover:bg-brand hover:text-white"><ChevronLeft /></button>
        <span className="text-sm font-bold tabular-nums text-navy">{i + 1} / {TESTIMONIALS.length}</span>
        <button type="button" onClick={() => go(i + 1)} aria-label="Ulasan berikutnya" className="grid size-12 place-items-center rounded-full bg-soft text-brand hover:bg-brand hover:text-white"><ChevronRight /></button>
      </div>
    </div>
  )
}

export function Rating() {
  return (
    <div className="inline-flex flex-col items-center gap-1 rounded-3xl bg-white px-8 py-5 shadow-soft">
      <span className="text-5xl font-extrabold tabular-nums text-navy">{SITE.rating}</span>
      <span className="text-sky" aria-hidden="true">★★★★★</span>
      <span className="text-sm font-semibold text-ink/70">{SITE.reviews} ulasan Google Maps</span>
    </div>
  )
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-brand/10 shadow-soft">
      <iframe title="Lokasi ADIVA MEDIKA di Google Maps" src={SITE.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="block h-80 w-full sm:h-[28rem]" />
    </div>
  )
}

export function ContactButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MapPin className="size-4" />Buka Google Maps</a>
      <WaButton>Hubungi WhatsApp</WaButton>
      <a href={`mailto:${SITE.email}`} className="btn btn-ghost"><Mail className="size-4" />Kirim Email</a>
    </div>
  )
}

export const LinkBtn = ({ to, children, ghost = false }: { to: string; children: ReactNode; ghost?: boolean }) => (
  <Link to={to} className={`btn ${ghost ? 'btn-ghost' : 'btn-primary'}`}>{children}</Link>
)
