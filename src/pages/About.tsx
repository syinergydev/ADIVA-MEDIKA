import { useRef } from 'react'
import Seo from '../components/Seo'
import { CtaBand, Heading, PageHero } from '../components/Blocks'
import Credentials from '../components/Credentials'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  return (
    <div ref={ref}>
      <Seo path="/tentang-kami" title="Tentang ADIVA MEDIKA — Khitan & Rawat Luka Mojokerto" description="Kenali ADIVA MEDIKA, penyedia layanan rawat luka dan khitan modern di Mojokerto, beserta tenaga medis dan kredensialnya." />
      <PageHero eyebrow="Tentang Kami" title="Mengenal ADIVA MEDIKA" text="ADIVA MEDIKA merupakan penyedia layanan rawat luka dan khitan modern di Mojokerto dengan pendekatan pelayanan kesehatan yang mengutamakan perhatian, kenyamanan, dan profesionalitas." />
      <section className="section">
        <div className="container-x">
          <Heading eyebrow="Filosofi Pelayanan" title="Perhatian, kenyamanan, profesionalitas." />
          <div className="grid gap-5 md:grid-cols-2">
            <div data-reveal className="card text-center"><h3 className="text-xl">Profil</h3><p className="mt-2 text-ink/75">Berlokasi di Dlanggu, Kabupaten Mojokerto, ADIVA MEDIKA melayani khitan modern dan perawatan luka, serta menerima pertanyaan layanan kunjungan ke rumah.</p></div>
            <div data-reveal className="card text-center"><h3 className="text-xl">Pendekatan Homecare</h3><p className="mt-2 text-ink/75">Pasien dan keluarga dapat menanyakan layanan di rumah agar proses perawatan terasa lebih nyaman dan dikenal.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Tenaga Medis" title="Achmad Afif Maulana, S.Kep., Ns., CBWCN" text="Perawat bersertifikasi perawatan luka modern, sesuai materi yang diberikan owner." />
          <div data-mask className="mx-auto max-w-md overflow-hidden"><img src="/img/wound-afif.webp" alt="Achmad Afif Maulana, S.Kep., Ns., CBWCN, tenaga medis ADIVA MEDIKA" loading="lazy" className="w-full" /></div>
        </div>
      </section>
      <Credentials />
      <CtaBand />
    </div>
  )
}
