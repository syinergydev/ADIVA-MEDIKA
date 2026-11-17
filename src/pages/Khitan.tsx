import { useRef } from 'react'
import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import { CtaBand, Faq, Heading, PageHero, WaButton } from '../components/Blocks'
import { KHITAN_FAQ, METHODS, PACKAGES, SHOW_PRICES, WA_MSG } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Khitan() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/khitan-modern" title="Khitan Modern Mojokerto — Sunat Modern ADIVA MEDIKA" description="Layanan khitan modern di Mojokerto oleh ADIVA MEDIKA, memperhatikan kondisi dan kenyamanan anak. Tersedia pertanyaan khitan di rumah." />
      <PageHero eyebrow="Khitan Modern" title="Khitan Modern dengan Pelayanan yang Memperhatikan Kenyamanan Anak." text="ADIVA MEDIKA menyediakan layanan khitan modern dengan pendekatan yang memperhatikan kondisi, kebutuhan, dan kenyamanan pasien." image="img/khitan-go.webp" alt="Materi Go Khitan ADIVA MEDIKA" msg={WA_MSG.khitan} />

      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Pilihan Metode" title="Metode khitan yang dapat ditanyakan." text="Penjelasan bersifat netral. Pemilihan metode ditentukan bersama tenaga medis sesuai kondisi pasien." />
          <ul className="grid gap-5 md:grid-cols-3">
            {METHODS.map(([t, d]) => (<li key={t} data-reveal className="card text-center transition duration-300 hover:-translate-y-1.5"><h3 className="text-xl">{t}</h3><p className="mt-2 text-sm text-ink/75">{d}</p></li>))}
          </ul>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Paket Khitan" title="Bandingkan paket dengan mudah." text={SHOW_PRICES ? undefined : 'Harga disampaikan setelah konfirmasi dari tim. Silakan tanyakan lewat WhatsApp.'} />
          <ul className="grid gap-5 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <li key={p.name} data-reveal className={`rounded-[2rem] p-7 text-center ${p.featured ? 'bg-navy text-white shadow-soft' : 'bg-white shadow-soft'}`}>
                <h3 className={`text-2xl ${p.featured ? '!text-white' : ''}`}>{p.name}</h3>
                {SHOW_PRICES && <p className="mt-1 text-3xl font-extrabold tabular-nums">{p.price}</p>}
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((it) => (<li key={it} className="flex items-start justify-center gap-2"><Check className="mt-0.5 size-4 shrink-0 text-sky" />{it}</li>))}
                </ul>
                <WaButton msg={WA_MSG.harga} className="mt-6">Tanyakan Harga</WaButton>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-ink/60">Isi paket mengacu pada materi promosi dan dapat berubah. Konfirmasi ke tim sebelum memesan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Khitan di Rumah" title="Khitan Lebih Nyaman di Lingkungan yang Dikenal Anak." text="Materi layanan menyebut khitan datang ke rumah. Ketersediaan per lokasi dan jadwal dikonfirmasi terlebih dahulu." />
          <div data-mask className="mx-auto max-w-md overflow-hidden"><img src="img/khitan-combo.webp" alt="Materi khitan metode Combo Sealer" loading="lazy" className="w-full" /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Heading eyebrow="Proses & Perawatan" title="Dari konsultasi sampai pendampingan." text="Konsultasi awal, penjelasan tindakan, pelaksanaan oleh tenaga medis, lalu arahan perawatan setelah khitan dan pendampingan informasi lewat WhatsApp." />
          <Heading title="Pertanyaan Umum" />
          <Faq items={KHITAN_FAQ} />
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-ink/60">Hasil dan pemulihan dapat berbeda pada tiap pasien. Informasi di halaman ini bukan pengganti konsultasi langsung dengan tenaga kesehatan.</p>
        </div>
      </section>
      <CtaBand msg={WA_MSG.khitan} />
    </div>
  )
}
