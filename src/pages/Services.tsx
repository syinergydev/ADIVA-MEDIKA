import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CtaBand, PageHero, WaButton } from '../components/Blocks'
import { SERVICES, WA_MSG } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/layanan" title="Layanan ADIVA MEDIKA — Khitan, Rawat Luka, Homecare Mojokerto" description="Daftar layanan ADIVA MEDIKA di Mojokerto: khitan modern, perawatan luka, dan layanan homecare lainnya." />
      <PageHero eyebrow="Layanan Kami" title="Layanan yang mudah dipahami, dengan pendampingan yang ramah." text="Dua layanan utama kami adalah khitan modern dan perawatan luka. Layanan lain tersedia untuk ditanyakan." />
      <section className="section">
        <div className="container-x space-y-10">
          {SERVICES.map((s, i) => (
            <article key={s.id} data-reveal className="grid items-center gap-6 rounded-[2rem] bg-white p-5 text-center shadow-soft sm:p-8 md:grid-cols-2 md:gap-10">
              <div className={`overflow-hidden rounded-3xl ${i % 2 ? 'md:order-2' : ''}`}><img src={s.img} alt={s.title} loading="lazy" className="mx-auto w-full max-w-sm transition duration-500 hover:scale-105" /></div>
              <div>
                {s.confirm && <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Konfirmasi Ketersediaan</span>}
                <h2 className="text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-ink/75">{s.text}</p>
                <div className="mt-5 flex justify-center">
                  {s.confirm ? <WaButton msg={`Halo ADIVA MEDIKA, saya ingin menanyakan ketersediaan layanan ${s.title}.`}>Tanyakan Layanan</WaButton> : <Link to={s.to} className="btn btn-primary">{s.cta}</Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand msg={WA_MSG.general} />
    </div>
  )
}
