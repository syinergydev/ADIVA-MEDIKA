import { useRef } from 'react'
import Seo from '../components/Seo'
import { CtaBand, Heading, PageHero } from '../components/Blocks'
import { SERVICES, STEPS, WA_MSG } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Homecare() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/homecare" title="Homecare Mojokerto — Layanan Kesehatan di Rumah | ADIVA MEDIKA" description="Tanyakan layanan kunjungan ke rumah ADIVA MEDIKA di Mojokerto: khitan, perawatan luka, dan layanan lainnya sesuai ketersediaan." />
      <PageHero eyebrow="Homecare" title="Pelayanan Kesehatan yang Lebih Dekat dengan Anda." text="Pasien atau keluarga dapat menghubungi ADIVA MEDIKA untuk menanyakan kemungkinan kunjungan ke rumah." msg={WA_MSG.homecare} />
      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Apa itu Homecare?" title="Layanan yang datang ke tempat pasien." text="Homecare adalah layanan kesehatan yang dilakukan di rumah pasien, sesuai ketersediaan layanan, jadwal, dan lokasi." />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (<li key={s.id} data-reveal className="card text-center"><h3 className="text-lg">{s.title}</h3>{s.confirm && <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Konfirmasi Ketersediaan</span>}</li>))}
          </ul>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Alur Permintaan" title="Lima langkah sederhana" />
          <ol className="mx-auto max-w-2xl space-y-4">
            {STEPS.map(([t, d], i) => (<li key={t} data-reveal className="card text-center"><span className="text-3xl font-extrabold tabular-nums text-sky">{i + 1}</span><h3 className="text-lg">{t}</h3><p className="text-sm text-ink/75">{d}</p></li>))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Area & Jadwal" title="Area pelayanan dan jadwal dikonfirmasi lebih dulu." text="Cakupan area tidak dijamin untuk seluruh wilayah. Sampaikan lokasi Anda lewat WhatsApp. Informasi Google Maps menyebut buka 24 jam, namun ketersediaan tindakan perlu dikonfirmasi." />
        </div>
      </section>
      <CtaBand msg={WA_MSG.homecare} />
    </div>
  )
}
