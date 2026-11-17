import { useRef } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/Seo'
import { ContactButtons, Heading, MapEmbed, PageHero } from '../components/Blocks'
import Social from '../components/Social'
import { SITE, waLink } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)
  const rows = [
    [MapPin, 'Alamat', SITE.address, SITE.maps],
    [Phone, 'WhatsApp', SITE.phoneDisplay, waLink()],
    [Mail, 'Email', SITE.email, `mailto:${SITE.email}`],
    [Clock, 'Jam operasional', SITE.hours, ''],
  ] as const
  return (
    <div ref={ref}>
      <Seo path="/kontak" title="Kontak ADIVA MEDIKA — Dlanggu, Mojokerto" description="Hubungi ADIVA MEDIKA di Dsn. Bareng, Talok, Dlanggu, Mojokerto. WhatsApp 0877-8898-6700, email, Google Maps, Instagram, Facebook." />
      <PageHero eyebrow="Kontak" title="Hubungi ADIVA MEDIKA" text="Sampaikan kebutuhan layanan Anda. Tim akan membantu memberi informasi dan konsultasi awal." />
      <section className="section">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2">
            {rows.map(([Icon, t, v, href]) => {
              const inner = (<><span className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-soft text-brand"><Icon className="size-6" /></span><h2 className="text-lg">{t}</h2><p className="mt-1 break-words text-sm text-ink/75">{v}</p></>)
              return (<li key={t} data-reveal>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="card block text-center transition duration-200 hover:-translate-y-1">{inner}</a> : <div className="card text-center">{inner}</div>}</li>)
            })}
          </ul>
          <div data-reveal className="mt-10"><ContactButtons /></div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container-x">
          <Heading eyebrow="Lokasi" title="Temukan Kami di Google Maps" />
          <div data-reveal><MapEmbed /></div>
        </div>
      </section>
      <section className="section">
        <div className="container-x text-center">
          <Heading eyebrow="Media Sosial" title="Ikuti ADIVA MEDIKA" />
          <div data-reveal><Social withWa /></div>
        </div>
      </section>
    </div>
  )
}
