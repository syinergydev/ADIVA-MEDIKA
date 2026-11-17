import { useEffect } from 'react'
const BASE = 'https://GANTI-DOMAIN.com'
export default function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = title
    const set = (sel: string, attr: string, val: string, create: () => HTMLElement) => {
      let el = document.head.querySelector<HTMLElement>(sel)
      if (!el) { el = create(); document.head.appendChild(el) }
      el.setAttribute(attr, val)
    }
    const meta = (name: string, content: string, prop = false) =>
      set(`meta[${prop ? 'property' : 'name'}="${name}"]`, 'content', content, () => {
        const m = document.createElement('meta'); m.setAttribute(prop ? 'property' : 'name', name); return m })
    meta('description', description)
    meta('og:title', title, true); meta('og:description', description, true); meta('og:url', BASE + path, true)
    set('link[rel="canonical"]', 'href', BASE + path, () => { const l = document.createElement('link'); l.rel = 'canonical'; return l })
  }, [title, description, path])
  return null
}
