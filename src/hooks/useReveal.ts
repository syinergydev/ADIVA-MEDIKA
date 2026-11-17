import { RefObject } from 'react'
import { gsap, ScrollTrigger, useGSAP, reduced } from '../lib/gsap'

/** [data-reveal] fade+rise, [data-mask] clip-path image reveal, [data-parallax] parallax ringan. Hanya transform/opacity/clip-path. */
export function useReveal(scope: RefObject<HTMLElement>) {
  useGSAP(() => {
    if (reduced()) return
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, { opacity: 0, y: 32, duration: 0.9, ease: 'power3.out', delay: Number(el.dataset.delay || 0),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
    })
    gsap.utils.toArray<HTMLElement>('[data-mask]').forEach((el) => {
      gsap.fromTo(el, { clipPath: 'inset(10% 8% 10% 8% round 28px)', scale: 1.05 },
        { clipPath: 'inset(0% 0% 0% 0% round 28px)', scale: 1, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
    })
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      gsap.to(el, { yPercent: -5, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
  }, { scope })
}
