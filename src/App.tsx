import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const P = {
  Home: lazy(() => import('./pages/Home')),
  About: lazy(() => import('./pages/About')),
  Services: lazy(() => import('./pages/Services')),
  Khitan: lazy(() => import('./pages/Khitan')),
  Wound: lazy(() => import('./pages/Wound')),
  Homecare: lazy(() => import('./pages/Homecare')),
  Education: lazy(() => import('./pages/Education')),
  Gallery: lazy(() => import('./pages/Gallery')),
  Reviews: lazy(() => import('./pages/Reviews')),
  Contact: lazy(() => import('./pages/Contact')),
}
export default function App() {
  return (
    <Suspense fallback={<div className="grid h-dvh place-items-center text-brand">Memuat…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<P.Home />} />
          <Route path="tentang-kami" element={<P.About />} />
          <Route path="layanan" element={<P.Services />} />
          <Route path="khitan-modern" element={<P.Khitan />} />
          <Route path="rawat-luka" element={<P.Wound />} />
          <Route path="homecare" element={<P.Homecare />} />
          <Route path="edukasi" element={<P.Education />} />
          <Route path="galeri" element={<P.Gallery />} />
          <Route path="ulasan" element={<P.Reviews />} />
          <Route path="kontak" element={<P.Contact />} />
          <Route path="*" element={<P.Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
