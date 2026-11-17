import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home as HomeIcon, MessageCircle, ShieldCheck, Star, Award } from 'lucide-react'
import Seo from '../components/Seo'
import { CtaBand, Heading, Testimonials, WaButton } from '../components/Blocks'
import { SERVICES, SITE, WHY, WA_MSG } from '../data/site'
import { gsap, ScrollTrigger, useGSAP, reduced } from '../lib/gsap'
import { useReveal } from '../hooks/useReveal'

const HEADLINE = 'Perawatan Kesehatan Profesional, Lebih Dekat dengan Keluarga Anda.'

export default function Home() {
  const root = useRef<HTMLDivElement>(null)
  const pinCol = useRef<HTMLDivElement>(null)
  const stack = useRef<HTMLDivElement>(null)
  useReveal(root)

  useGSAP(() => {
    if (!reduced()) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-logo]', { opacity: 0, y: 20, duration: 0.8 })
        .from('[data-word]', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.05 }, '-=0.3')
        .from('[data-sub]', { opacity: 0, y: 24, duration: 0.8 }, '-=0.4')
        .from('[data-cta]', { opacity: 0, y: 24, duration: 0.7, stagger: 0.12 }, '-=0.4')
      gsap.from('[data-hero-img]', { scale: 1.12, opacity: 0, duration: 1.6, ease: 'power3.out' })
    }
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({ trigger: pinCol.current, start: 'top top+=120', endTrigger: stack.current, end: 'bottom bottom-=40', pin: true, pinSpacing: false })
    })
    return () => mm.revert()
  }, { scope: root })

  return (
    <div ref={root}>
      <Seo path="/" title="ADIVA MEDIKA — Khitan Modern & Rawat Luka Mojokerto" description="ADIVA MEDIKA menghadirkan layanan khitan modern dan perawatan luka dengan pendekatan homecare di Mojokerto. Konsultasi lewat WhatsApp." />

      <section className="hero-bg relative overflow-hidden pb-16 pt-32 text-center sm:pt-40">
        <div aria-hidden="true" className="ambient pointer-events-none absolute -left-24 top-24 size-80 rounded-full bg-sky/20 blur-3xl" />
        <div className="container-x relative flex flex-col items-center">
          <img data-logo src="/img/logo.webp" alt="Logo ADIVA MEDIKA Rawat Luka & Khitan Modern" width={260} height={83} className="mb-6 h-16 w-auto sm:h-20" fetchPriority="high" />
          <h1 aria-label={HEADLINE} className="max-w-5xl text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
            {HEADLINE.split(' ').map((w, i) => (
              <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-1 align-bottom"><span data-word className="inline-block">{w}&nbsp;</span></span>
            ))}
          </h1>
          <p data-sub className="lead mt-6">ADIVA MEDIKA menghadirkan layanan khitan modern dan perawatan luka dengan pendekatan homecare yang mengutamakan kenyamanan, perhatian, dan pelayanan profesional di Mojokerto.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span data-cta><WaButton msg={WA_MSG.general}>Konsultasi Sekarang</WaButton></span>
            <Link data-cta to="/layanan" className="btn btn-ghost">Lihat Layanan Kami</Link>
          </div>
          <div data-hero-img className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4">
            <img src="/img/khitan-go.webp" alt="Materi layanan khitan ADIVA MEDIKA" className="w-full rounded-[1.75rem] shadow-soft" />
            <img src="/img/wound-afif.webp" alt="Tenaga medis perawatan luka ADIVA MEDIKA" className="w-full rounded-[1.75rem] shadow-soft sm:translate-y-8" />
          </div>
        </div>
      </section>

      <section className="section bg-white pt-20 sm:pt-28">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Star, `${SITE.rating} di Google Maps`, 'Peringkat dari ulasan pengguna'],
              [MessageCircle, `${SITE.reviews} ulasan Google`, 'Ulasan asli di Google Maps'],
              [HomeIcon, 'Layanan homecare', 'Kunjungan sesuai ketersediaan'],
              [Award, 'Kredensial terdokumentasi', 'Sertifikat pelatihan asli'],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Star
              return (
                <li key={t as string} data-reveal className="card flex flex-col items-center text-center">
                  <span className="mb-3 grid size-12 place-items-center rounded-full bg-soft text-brand"><I className="size-6" /></span>
                  <h3 className="text-lg">{t as string}</h3><p className="mt-1 text-sm text-ink/70">{d as string}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div ref={pinCol} className="text-center">
            <span data-reveal className="eyebrow">Layanan Unggulan</span>
            <h2 data-reveal className="text-3xl sm:text-5xl">Dua layanan utama, satu pendekatan yang hangat.</h2>
            <p data-reveal className="lead mt-4">Khitan modern dan perawatan luka dengan komunikasi yang jelas, nyaman bagi pasien dan keluarga.</p>
          </div>
          <div ref={stack} className="flex flex-col gap-8">
            {SERVICES.slice(0, 2).map((s) => (
              <article key={s.id} className="overflow-hidden rounded-[2rem] bg-white text-center shadow-soft">
                <div data-mask className="overflow-hidden"><img src={s.img} alt={s.title} loading="lazy" className="w-full" /></div>
                <div data-reveal className="p-6 sm:p-8">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 text-ink/75">{s.text}</p>
                  <Link to={s.to} className="btn btn-primary mt-5">{s.cta}<ArrowRight className="size-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x text-center">
          <Heading eyebrow="Homecare Experience" title="Perawatan Lebih Dekat, Nyaman dari Rumah." text="Pasien atau keluarga dapat menanyakan kemungkinan kunjungan ke rumah. Jenis layanan, lokasi, dan jadwal dikonfirmasi bersama tim sebelum kunjungan." />
          <div data-reveal className="mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-soft"><img data-parallax src="/img/khitan-combo.webp" alt="Materi khitan di rumah ADIVA MEDIKA" loading="lazy" className="w-full" /></div>
          <Link data-reveal to="/homecare" className="btn btn-primary mt-8">Pelajari Homecare<ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Nilai Pelayanan" title="Kenapa Memilih ADIVA MEDIKA?" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([t, d]) => (
              <li key={t} data-reveal className="card text-center transition duration-300 ease-out hover:-translate-y-1.5">
                <ShieldCheck className="mx-auto mb-3 size-8 text-sky" />
                <h3 className="text-lg">{t}</h3><p className="mt-2 text-sm text-ink/75">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Ulasan" title="Kata Mereka di Google Maps" />
          <div data-reveal><Testimonials /></div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
