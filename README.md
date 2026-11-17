# ADIVA MEDIKA — Website (React + Vite + TypeScript + Tailwind + GSAP)

## Menjalankan
    npm install
    npm run dev        # pengembangan
    npm run build      # hasil di folder dist/ (siap upload)

Deploy: Vercel / Netlify / Cloudflare Pages (sudah ada vercel.json dan public/_redirects untuk SPA).
Setelah punya domain, ganti `https://GANTI-DOMAIN.com` di: public/sitemap.xml, public/robots.txt, src/components/Seo.tsx.

## Wajib dikonfirmasi owner sebelum publish
- Harga paket khitan: `SHOW_PRICES = false` di src/data/site.ts (draft: Silver 1jt, Gold 1,5jt, Platinum 2jt; poster lain menyebut 900rb). Ubah ke true hanya setelah disetujui.
- Layanan tambahan (lab, NGT, kateter) diberi label "Konfirmasi Ketersediaan".
- Isi paket, metode (Laser/Lem/Combo Sealer-Tekno Klem), area homecare, jam 24 jam.
- Peta: src/data/site.ts → `mapsEmbed` memakai pencarian lokasi; ganti dengan URL "Bagikan > Sematkan peta" dari Google Maps agar pin tepat.
- Artikel edukasi memakai poster berlabel Homecare Medis Mojokerto; tanggal terbit sengaja tidak dicantumkan.
- Foto pasien (15.02.19) TIDAK dipakai karena belum ada izin publikasi. Poster harga (15.02.20) dan promo berharga tidak ditampilkan.
- "Member Of" sengaja tidak dibuat: tidak ada bukti keanggotaan di ZIP.
- Tidak ada video di ZIP.
