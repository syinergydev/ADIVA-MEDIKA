import { useRef } from 'react'
import Seo from '../components/Seo'
import { CtaBand, Faq, Heading, PageHero } from '../components/Blocks'
import Credentials from '../components/Credentials'
import { STEPS, WA_MSG, WOUND_FAQ } from '../data/site'
import { useReveal } from '../hooks/useReveal'

const TYPES: [string, string][] = [
  ['Luka pascaoperasi', 'Perawatan luka setelah tindakan operasi.'],
  ['Luka kronis', 'Luka yang sulit atau lama sembuh dan memerlukan perhatian lebih.'],
  ['Luka diabetes', 'Penanganan luka pada pasien dengan diabetes.'],
  ['Luka tekan (dekubitus)', 'Luka akibat tekanan berkepanjangan pada kulit.'],
]

export default function Wound() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/rawat-luka" title="Rawat Luka Mojokerto — Perawatan Luka di Rumah | ADIVA MEDIKA" description="Informasi perawatan luka modern ADIVA MEDIKA di Mojokerto: luka operasi, kronis, diabetes, dan dekubitus dengan pendekatan homecare." />
      <PageHero eyebrow="Rawat Luka" title="Perawatan Luka Modern dengan Pendekatan yang Tepat dan Terarah." text="ADIVA MEDIKA menyediakan informasi layanan perawatan luka dengan pendekatan homecare, sehingga pasien dapat menanyakan kemungkinan pelayanan di rumah." image="img/wound-afif.webp" alt="Achmad Afif Maulana, S.Kep., Ns., CBWCN, perawat perawatan luka" msg={WA_MSG.luka} />
      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Jenis Luka" title="Jenis luka yang dapat ditanyakan." />
          <ul className="grid gap-5 sm:grid-cols-2">
            {TYPES.map(([t, d]) => (<li key={t} data-reveal className="card text-center"><h3 className="text-xl">{t}</h3><p className="mt-2 text-sm text-ink/75">{d}</p></li>))}
          </ul>
          <p data-reveal className="mx-auto mt-8 max-w-2xl rounded-2xl bg-soft p-4 text-center text-sm font-semibold text-navy">Informasi di halaman ini bersifat edukatif dan bukan pengganti pemeriksaan langsung oleh tenaga kesehatan.</p>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Proses Konsultasi" title="Langkah konsultasi" />
          <ol className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {STEPS.map(([t, d], i) => (<li key={t} data-reveal className="card text-center"><span className="mb-2 block text-3xl font-extrabold tabular-nums text-sky">{i + 1}</span><h3 className="text-lg">{t}</h3><p className="mt-1 text-sm text-ink/75">{d}</p></li>))}
          </ol>
        </div>
      </section>
      <Credentials />
      <section className="section">
        <div className="container-x"><Heading title="Pertanyaan Umum" /><Faq items={WOUND_FAQ} /></div>
      </section>
      <CtaBand msg={WA_MSG.luka} />
    </div>
  )
}
