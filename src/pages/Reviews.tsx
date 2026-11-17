import { useRef } from 'react'
import Seo from '../components/Seo'
import { CtaBand, PageHero, Rating, Testimonials } from '../components/Blocks'
import { SITE, TESTIMONIALS } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/ulasan" title="Ulasan ADIVA MEDIKA — Rating 5,0 di Google Maps" description="Ulasan Google Maps untuk ADIVA MEDIKA Mojokerto: rating 5,0 dari 17 ulasan." />
      <PageHero eyebrow="Ulasan" title="Kepercayaan dari pasien dan keluarga." text="Berikut rating dan kutipan ulasan dari Google Maps." />
      <section className="section">
        <div className="container-x text-center">
          <div data-reveal><Rating /></div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (<li key={t} data-reveal className="card"><p className="font-semibold text-navy">“{t}”</p><p className="mt-3 text-xs text-ink/60">Ulasan Google Maps</p></li>))}
          </ul>
          <div data-reveal className="mt-10"><Testimonials /></div>
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">Lihat di Google Maps</a>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
