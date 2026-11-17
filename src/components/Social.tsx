import { SITE } from '../data/site'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons'
import { waLink } from '../data/site'

type Props = { tone?: 'light' | 'dark'; withWa?: boolean }
export default function Social({ tone = 'light', withWa = false }: Props) {
  const base = 'grid size-12 place-items-center rounded-full transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 '
  const color = tone === 'dark' ? 'bg-white/10 text-white hover:bg-white hover:text-brand' : 'bg-soft text-brand hover:bg-brand hover:text-white'
  const items = [
    { href: SITE.instagram, label: 'Instagram ADIVA MEDIKA', Icon: InstagramIcon },
    { href: SITE.facebook, label: 'Facebook ADIVA MEDIKA', Icon: FacebookIcon },
    ...(withWa ? [{ href: waLink(), label: 'WhatsApp ADIVA MEDIKA', Icon: WhatsAppIcon }] : []),
  ]
  return (
    <ul className="flex items-center justify-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={base + color}>
            <Icon className="size-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}
