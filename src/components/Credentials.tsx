import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { CERTS } from '../data/site'
import { Heading } from './Blocks'

export function Lightbox({ item, onClose }: { item: { src: string; alt: string } | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [item, onClose])
  if (!item) return null
  return (
    <div role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose} className="fixed inset-0 z-[60] grid h-dvh place-items-center bg-navy/90 p-4">
      <button type="button" aria-label="Tutup" onClick={onClose} className="absolute right-4 top-[max(16px,env(safe-area-inset-top))] grid size-12 place-items-center rounded-full bg-white text-navy"><X /></button>
      <img src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} className="max-h-[85dvh] max-w-full rounded-2xl bg-white object-contain" />
    </div>
  )
}

export default function Credentials() {
  const [sel, setSel] = useState<{ src: string; alt: string } | null>(null)
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Heading eyebrow="Kredensial" title="Pelatihan & Sertifikasi Profesional" text="Dokumen asli atas nama Achmad Afif Maulana, S.Kep., Ns. Sertifikat pelatihan tidak sama dengan keanggotaan organisasi." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c) => (
            <li key={c.src} data-reveal>
              <button type="button" onClick={() => setSel({ src: c.src, alt: `Sertifikat ${c.title}` })} className="group w-full overflow-hidden rounded-3xl border border-brand/10 bg-mist text-center transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <span className="block aspect-[4/5] overflow-hidden bg-white"><img src={c.src} alt={`Sertifikat ${c.title}`} loading="lazy" className="size-full object-contain transition duration-500 group-hover:scale-105" /></span>
                <span className="block p-4"><span className="block text-sm font-bold text-navy">{c.title}</span><span className="mt-1 block text-xs text-ink/65">{c.sub}</span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox item={sel} onClose={() => setSel(null)} />
    </section>
  )
}
