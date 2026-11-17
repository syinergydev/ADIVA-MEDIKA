import { useRef, useState } from 'react'
import Seo from '../components/Seo'
import { CtaBand, PageHero } from '../components/Blocks'
import { Lightbox } from '../components/Credentials'
import { GALLERY, GALLERY_CATS } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [cat, setCat] = useState('Semua')
  const [sel, setSel] = useState<{ src: string; alt: string } | null>(null)
  useReveal(ref)
  const items = cat === 'Semua' ? GALLERY : GALLERY.filter((g) => g.cat === cat)
  return (
    <div ref={ref}>
      <Seo path="/galeri" title="Galeri ADIVA MEDIKA — Khitan, Rawat Luka, Sertifikat" description="Dokumentasi ADIVA MEDIKA: materi khitan modern, perawatan luka, edukasi, dan sertifikat pelatihan." />
      <PageHero eyebrow="Galeri" title="Dokumentasi ADIVA MEDIKA" text="Materi layanan, edukasi, dan sertifikat. Foto pasien tidak ditampilkan tanpa persetujuan publikasi." />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Kategori galeri">
            {GALLERY_CATS.map((c) => (<button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-11 rounded-full px-5 text-sm font-bold ${cat === c ? 'bg-brand text-white' : 'bg-white text-brand shadow-soft'}`}>{c}</button>))}
          </div>
          <div className="columns-2 gap-4 lg:columns-3">
            {items.map((g) => (
              <button key={g.src} type="button" onClick={() => setSel({ src: g.src, alt: g.alt })} className="group mb-4 block w-full overflow-hidden rounded-3xl bg-white shadow-soft">
                <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition duration-500 ease-out group-hover:scale-105 ${g.h}`} />
              </button>
            ))}
          </div>
        </div>
      </section>
      <Lightbox item={sel} onClose={() => setSel(null)} />
      <CtaBand />
    </div>
  )
}
