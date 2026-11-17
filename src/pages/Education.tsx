import { useRef, useState } from 'react'
import Seo from '../components/Seo'
import { CtaBand, Heading, PageHero, WaButton } from '../components/Blocks'
import { ARTICLES, CATEGORIES, WA_MSG } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const [cat, setCat] = useState('Semua')
  const [open, setOpen] = useState<string | null>(null)
  useReveal(ref)
  const list = cat === 'Semua' ? ARTICLES : ARTICLES.filter((a) => a.cat === cat)
  return (
    <div ref={ref}>
      <Seo path="/edukasi" title="Edukasi Kesehatan — ADIVA MEDIKA Mojokerto" description="Artikel edukasi ADIVA MEDIKA: perawatan luka, pemeriksaan kesehatan, NGT, kateter, asma, dan hipertensi." />
      <PageHero eyebrow="Edukasi Kesehatan" title="Edukasi yang mudah dipahami untuk keluarga." text="Artikel bersifat edukatif dan tidak menggantikan pemeriksaan langsung oleh tenaga kesehatan." />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Kategori artikel">
            {CATEGORIES.map((c) => (<button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-11 rounded-full px-5 text-sm font-bold ${cat === c ? 'bg-brand text-white' : 'bg-white text-brand shadow-soft'}`}>{c}</button>))}
          </div>
          {list.length === 0 && <p className="text-center text-ink/70">Artikel kategori ini segera hadir.</p>}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <article key={a.slug} data-reveal className="overflow-hidden rounded-3xl bg-white text-center shadow-soft">
                <img src={a.img} alt={a.title} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="p-6">
                  <span className="eyebrow">{a.cat}</span>
                  <h2 className="text-xl">{a.title}</h2>
                  <p className="mt-2 text-sm text-ink/75">{a.sum}</p>
                  {open === a.slug && (<div className="mt-4 space-y-3 text-left text-sm leading-relaxed text-ink/80">{a.body.map((p) => <p key={p}>{p}</p>)}<div className="text-center"><WaButton msg={WA_MSG.general}>Konsultasi</WaButton></div></div>)}
                  <button type="button" aria-expanded={open === a.slug} onClick={() => setOpen(open === a.slug ? null : a.slug)} className="btn btn-ghost mt-4">{open === a.slug ? 'Tutup' : 'Baca Selengkapnya'}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
