export const SITE = {
  name: 'ADIVA MEDIKA',
  tagline: 'Rawat Luka & Khitan Modern',
  phoneDisplay: '0877-8898-6700',
  wa: '6287788986700',
  email: 'adivamedika@gmail.com',
  address: 'Dsn. Bareng, RT.04 RW.04, Barong, Talok, Kecamatan Dlanggu, Kabupaten Mojokerto, Jawa Timur 61371',
  hours: 'Buka 24 jam (sesuai informasi Google Maps). Ketersediaan tindakan dikonfirmasi lewat WhatsApp.',
  maps: 'https://maps.app.goo.gl/18s4qTdJyfi9qz4EA',
  mapsEmbed: 'https://www.google.com/maps?q=ADIVA+MEDIKA+Dlanggu+Mojokerto&output=embed',
  facebook: 'https://www.facebook.com/share/1DEYuy2YE3/',
  instagram: 'https://www.instagram.com/adivamedika?xtok=MWoycHYzaTZyeGlqag==',
  rating: '5,0',
  reviews: 17,
}

export const waLink = (msg = 'Halo ADIVA MEDIKA, saya ingin mendapatkan informasi mengenai layanan yang tersedia.') =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(msg)}`

export const WA_MSG = {
  general: 'Halo ADIVA MEDIKA, saya ingin mendapatkan informasi mengenai layanan yang tersedia.',
  khitan: 'Halo ADIVA MEDIKA, saya ingin bertanya mengenai layanan khitan modern.',
  luka: 'Halo ADIVA MEDIKA, saya ingin berkonsultasi mengenai layanan perawatan luka.',
  homecare: 'Halo ADIVA MEDIKA, saya ingin menanyakan layanan kunjungan ke rumah.',
  harga: 'Halo ADIVA MEDIKA, saya ingin menanyakan harga paket khitan.',
}

export const NAV = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/khitan-modern', label: 'Khitan Modern' },
  { to: '/rawat-luka', label: 'Rawat Luka' },
  { to: '/edukasi', label: 'Edukasi' },
  { to: '/kontak', label: 'Kontak' },
]
export const FOOT_NAV = [
  ...NAV.slice(0, 6),
  { to: '/homecare', label: 'Homecare' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/ulasan', label: 'Ulasan' },
  NAV[6],
]

export const DISCLAIMER =
  'Informasi di situs ini bersifat edukatif dan bukan pengganti pemeriksaan serta konsultasi langsung dengan tenaga kesehatan.'

export const TESTIMONIALS = [
  'Perawatnya datang tepat waktu, ramah, sabar, dan sangat profesional.',
  'Perawatannya bagus, sabar dan sangat ramah, sukses selaluu.',
  'Perawat ramah, bisa dipanggil ke rumah.',
]

export const WHY: [string, string][] = [
  ['Ramah & komunikatif', 'Tim menjelaskan dengan bahasa yang mudah dipahami keluarga.'],
  ['Informasi yang jelas', 'Penjelasan tindakan dan perawatan disampaikan sebelum layanan dimulai.'],
  ['Home visit', 'Kunjungan ke rumah sesuai ketersediaan dan lokasi.'],
  ['Kompetensi relevan', 'Tenaga medis dengan pelatihan khitan modern dan perawatan luka.'],
  ['Pendampingan informasi', 'Arahan perawatan setelah tindakan sesuai ketentuan layanan.'],
]

export const SERVICES = [
  { id: 'khitan', title: 'Khitan / Sunat Modern', text: 'Layanan khitan modern dengan pilihan metode dan pendekatan yang disesuaikan dengan kondisi serta kebutuhan pasien.', to: '/khitan-modern', cta: 'Pelajari Khitan Modern', img: '/img/khitan-go.webp', confirm: false },
  { id: 'luka', title: 'Perawatan Luka', text: 'Informasi perawatan luka pascaoperasi, luka kronis, luka diabetes, dan luka tekan (dekubitus), tanpa janji hasil penyembuhan tertentu.', to: '/rawat-luka', cta: 'Informasi Rawat Luka', img: '/img/wound-afif.webp', confirm: false },
  { id: 'cek', title: 'Pemeriksaan Kesehatan', text: 'Pemeriksaan umum dan pemeriksaan laboratorium sederhana seperti gula darah, kolesterol, dan asam urat.', to: '/kontak', cta: 'Tanyakan Layanan', img: '/img/edu-lab.webp', confirm: true },
  { id: 'ngt', title: 'Pemasangan Selang Makan (NGT)', text: 'Prosedur memasukkan selang melalui hidung ke lambung untuk membantu asupan makanan, minuman, atau obat.', to: '/kontak', cta: 'Tanyakan Layanan', img: '/img/edu-ngt.webp', confirm: true },
  { id: 'kateter', title: 'Pemasangan Selang Kencing (Kateter)', text: 'Prosedur memasukkan selang ke kandung kemih agar urine dapat dikeluarkan.', to: '/kontak', cta: 'Tanyakan Layanan', img: '/img/edu-kateter.webp', confirm: true },
]

// DATA DRAFT: harga WAJIB disetujui owner. Ubah SHOW_PRICES menjadi true setelah disetujui.
export const SHOW_PRICES = false
export const PACKAGES = [
  { name: 'Silver', price: 'Rp1.000.000', featured: false, items: ['Metode Laser', 'Jahit estetik', 'Blus tanpa jarum suntik / jarum unyil', 'Obat pasca khitan', 'Verban anti lengket', 'Celana dalam khitan', 'Spray pembersih', 'Pendampingan via WA', 'Free kontrol 1x'] },
  { name: 'Gold', price: 'Rp1.500.000', featured: true, items: ['Metode Lem', 'Tanpa jahitan', 'Blus twin layer', 'Blus tanpa jarum suntik / jarum unyil', 'Tanpa verban', 'Obat pasca khitan', 'Celana dalam khitan 2pcs', 'Pendampingan via WA', 'Free kontrol 2x', 'Free mainan'] },
  { name: 'Platinum', price: 'Rp2.000.000', featured: false, items: ['Metode Lem', 'Tanpa jahitan', 'Blus tanpa jarum suntik / jarum unyil', 'Tanpa verban', 'Obat pasca khitan', 'Celana dalam khitan 2pcs', 'Spray pembersih 2pcs', 'Pendampingan via WA', 'Free kontrol sampai sembuh', 'Free mainan'] },
]

export const METHODS: [string, string][] = [
  ['Metode Laser', 'Tercantum pada paket Silver dalam materi promosi. Detail teknologi dijelaskan tenaga medis saat konsultasi.'],
  ['Metode Lem', 'Tercantum pada paket Gold dan Platinum. Kecocokan metode ditentukan setelah penilaian kondisi pasien.'],
  ['Combo Sealer / Tekno Klem', 'Materi pelatihan dan promosi menyebut Tekno Klem dan Tekno Sealer. Ketersediaan dikonfirmasi lewat WhatsApp.'],
]

export const KHITAN_FAQ: [string, string][] = [
  ['Berapa usia yang bisa dikhitan?', 'Kesiapan ditentukan oleh kondisi anak. Sampaikan usia dan kondisi anak lewat WhatsApp untuk arahan awal dari tim.'],
  ['Apakah khitan bisa dilakukan di rumah?', 'Materi layanan menyebut khitan datang ke rumah. Ketersediaan per lokasi dan jadwal dikonfirmasi terlebih dahulu.'],
  ['Bagaimana perawatan setelah khitan?', 'Tim memberi arahan perawatan pasca tindakan sesuai ketentuan layanan, termasuk pendampingan informasi lewat WhatsApp.'],
  ['Berapa biayanya?', 'Biaya disampaikan setelah konfirmasi dari tim. Silakan tanyakan harga lewat WhatsApp.'],
]
export const WOUND_FAQ: [string, string][] = [
  ['Apakah situs ini bisa mendiagnosis luka saya?', 'Tidak. Situs hanya menyajikan informasi edukatif. Penilaian luka dilakukan langsung oleh tenaga kesehatan.'],
  ['Apakah perawatan luka bisa dilakukan di rumah?', 'Anda dapat menanyakan kemungkinan pelayanan di rumah. Ketersediaan dikonfirmasi tim berdasarkan lokasi dan kondisi.'],
  ['Apa yang perlu saya siapkan saat konsultasi?', 'Ceritakan jenis luka, lama luka, dan kondisi umum pasien. Hindari mengirim data pribadi yang tidak diperlukan.'],
]

export const STEPS: [string, string][] = [
  ['Hubungi ADIVA MEDIKA', 'Kirim pesan lewat WhatsApp atau telepon.'],
  ['Sampaikan kebutuhan & lokasi', 'Jelaskan layanan yang dibutuhkan dan alamat pasien.'],
  ['Konfirmasi layanan & ketersediaan', 'Tim memastikan jenis layanan dan ketersediaan.'],
  ['Jadwal disepakati', 'Waktu kunjungan ditentukan bersama.'],
  ['Pelayanan dilakukan', 'Layanan dilaksanakan sesuai kesepakatan.'],
]

export const CERTS = [
  { src: '/img/cert-sunat.webp', title: 'Pelatihan Sunat Modern', sub: 'Tekno Klem dan Tekno Sealer, 24 Mei 2026' },
  { src: '/img/cert-moldtron.webp', title: 'Seminar Nasional Advance Khitan Modern', sub: 'Peserta, 24 Mei 2026' },
  { src: '/img/cert-update.webp', title: 'Circumcision Update 2025', sub: 'Certificate of Attendance' },
  { src: '/img/cert-cbwc.webp', title: 'Certified Basic Wound Care Program', sub: 'Certificate of Competence (CBWC)' },
]

export const ARTICLES = [
  { slug: 'kulit-luka-putih', cat: 'Perawatan Luka', title: 'Kenapa Kulit Sekitar Luka Bisa Terlihat Putih?', img: '/img/wound-white.webp', sum: 'Kulit sekitar luka yang tampak putih dapat berkaitan dengan kondisi luka yang perlu diperhatikan.', body: ['Kulit di sekitar luka kadang terlihat putih dan lembap. Materi edukasi ADIVA MEDIKA menyebut beberapa hal yang perlu diperhatikan, di antaranya luka yang terlalu lembap (maserasi), tekanan atau gesekan, dan kemungkinan infeksi.', 'Bila Anda mengalami hal ini, jangan menebak sendiri penyebabnya. Penilaian luka sebaiknya dilakukan langsung oleh tenaga kesehatan agar perawatan sesuai kondisi.'] },
  { slug: 'cek-lab', cat: 'Kesehatan Umum', title: 'Mengenal Pemeriksaan Lab Sederhana', img: '/img/edu-lab.webp', sum: 'Contohnya pemeriksaan gula darah, kolesterol, dan asam urat.', body: ['Pemeriksaan laboratorium sederhana dilakukan untuk mendeteksi kondisi kesehatan seseorang. Contohnya pemeriksaan gula darah, kolesterol, dan asam urat.', 'Hasil pemeriksaan sebaiknya dibaca bersama tenaga kesehatan. Tanyakan ketersediaan layanan ini lewat WhatsApp.'] },
  { slug: 'ngt', cat: 'Homecare', title: 'Mengenal Pemasangan Selang Makan (NGT)', img: '/img/edu-ngt.webp', sum: 'NGT adalah prosedur medis memasukkan selang dari hidung ke lambung.', body: ['Pemasangan selang makan atau nasogastric tube (NGT) adalah prosedur medis untuk memasukkan selang melalui hidung ke lambung, untuk membantu pemberian makanan, minuman, dan obat.', 'Prosedur ini dilakukan pada pasien yang tidak dapat menelan dengan aman. Keputusan dan pelaksanaannya dilakukan oleh tenaga kesehatan.'] },
  { slug: 'kateter', cat: 'Homecare', title: 'Mengenal Pemasangan Selang Kencing (Kateter)', img: '/img/edu-kateter.webp', sum: 'Kateter urine adalah prosedur memasukkan selang ke kandung kemih.', body: ['Pemasangan selang kencing atau kateter adalah prosedur memasukkan selang ke dalam saluran kemih agar urine dapat dikeluarkan.', 'Tindakan ini dilakukan tenaga kesehatan sesuai kondisi pasien. Konsultasikan kebutuhan Anda secara langsung.'] },
  { slug: 'asma', cat: 'Kesehatan Umum', title: 'Asma: Apa Itu dan Bagaimana Mencegah Kambuh?', img: '/img/edu-asma.webp', sum: 'Asma membuat pengidapnya sulit bernapas karena peradangan dan penyempitan saluran napas.', body: ['Asma adalah salah satu masalah paru-paru yang membuat pengidapnya kesulitan bernapas akibat peradangan dan penyempitan pada saluran pernapasan.', 'Materi edukasi menyebut pencegahan umum: waspadai tanda gejala asma, hindari pemicu, jaga kebersihan lingkungan, dan kelola stres dengan baik.'] },
  { slug: 'hipertensi', cat: 'Kesehatan Umum', title: 'Hipertensi: Fakta dan Langkah Pencegahan', img: '/img/edu-hipertensi.webp', sum: 'Pola hidup berperan dalam risiko hipertensi.', body: ['Hipertensi adalah kondisi tekanan darah tinggi. Materi edukasi menyebut kurang gerak, stres berkepanjangan, pola hidup tidak sehat, dan makanan tertentu sebagai faktor yang dapat berperan.', 'Pencegahan umum meliputi mengurangi garam, rutin beraktivitas fisik, tidak merokok, membatasi alkohol, dan menjaga berat badan ideal. Konsultasikan pemeriksaan tekanan darah dengan tenaga kesehatan.'] },
]
export const CATEGORIES = ['Semua', 'Edukasi Khitan', 'Perawatan Luka', 'Kesehatan Umum', 'Homecare']

export const GALLERY = [
  { src: '/img/khitan-go.webp', cat: 'Khitan modern', alt: 'Materi layanan khitan ADIVA MEDIKA', h: 'aspect-square' },
  { src: '/img/wound-afif.webp', cat: 'Perawatan luka', alt: 'Tenaga medis perawatan luka ADIVA MEDIKA', h: 'aspect-square' },
  { src: '/img/khitan-combo.webp', cat: 'Khitan modern', alt: 'Materi khitan metode Combo Sealer', h: 'aspect-[4/5]' },
  { src: '/img/cert-cbwc.webp', cat: 'Sertifikat', alt: 'Sertifikat Certified Basic Wound Care Program', h: 'aspect-[3/4]' },
  { src: '/img/wound-white.webp', cat: 'Perawatan luka', alt: 'Edukasi kulit sekitar luka', h: 'aspect-square' },
  { src: '/img/edu-lab.webp', cat: 'Edukasi', alt: 'Edukasi pemeriksaan lab sederhana', h: 'aspect-square' },
  { src: '/img/cert-sunat.webp', cat: 'Sertifikat', alt: 'Sertifikat Pelatihan Sunat Modern Tekno Klem dan Tekno Sealer', h: 'aspect-[3/2]' },
  { src: '/img/edu-asma.webp', cat: 'Edukasi', alt: 'Edukasi asma', h: 'aspect-[3/4]' },
  { src: '/img/edu-ngt.webp', cat: 'Homecare', alt: 'Edukasi pemasangan selang makan', h: 'aspect-square' },
  { src: '/img/edu-kateter.webp', cat: 'Homecare', alt: 'Edukasi pemasangan kateter', h: 'aspect-square' },
  { src: '/img/cert-update.webp', cat: 'Sertifikat', alt: 'Sertifikat Circumcision Update 2025', h: 'aspect-[3/4]' },
  { src: '/img/cert-moldtron.webp', cat: 'Sertifikat', alt: 'Sertifikat Seminar Nasional Advance Khitan Modern', h: 'aspect-[4/3]' },
]
export const GALLERY_CATS = ['Semua', 'Khitan modern', 'Perawatan luka', 'Homecare', 'Edukasi', 'Sertifikat']
