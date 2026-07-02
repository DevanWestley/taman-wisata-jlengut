/**
 * mockData.js
 * ---------------------------------------------------------------------------
 * Single source of truth for all site content. Raw plain-object data lives
 * here, then gets converted into OOP model instances (Attraction, Animal,
 * PhotoSpot, TicketPackage, FaqItem) via each class's static `fromList()`.
 *
 * WHY THIS MATTERS FOR MAINTAINABILITY:
 *  - Content editors only ever touch this one file.
 *  - Every component downstream works with model instances, so behaviour
 *    (like `.path`, `.hasAnimals()`, `.buildOrderMessage()`) is guaranteed
 *    to exist and is defined in exactly one place (the model class).
 *  - Swapping this file's content for a real CMS / API response later is a
 *    drop-in change — just replace the arrays below with fetched data run
 *    through the same `fromList()` calls.
 *
 * IMAGES: every `image` / `heroImage` path below points at a dummy
 * placeholder generated in /public/images. Replace the files in that
 * folder with real photography — the filenames already match what each
 * page expects, so no code changes are needed.
 */
import { Attraction, Animal, PhotoSpot, TicketPackage, FaqItem } from "../models";

// ─── CONTACT / GLOBAL CONSTANTS ─────────────────────────────────────────────
export const WA_NUMBER = "6281234567890";
export const MAPS_URL = "https://share.google/H8VbGA4kiB5ICnGIh";
export const CONTACT = {
  address:
    "Jl. Jlengut Indah, Barepan, Geneng, Karangduren, Kec. Kebonarum, Kabupaten Klaten, Jawa Tengah 57486",
  phone: "0812-3456-7890",
  phoneHref: "+6281234567890",
  email: "info@jlengut.com",
  instagram: "@tamanwisatajlengut",
  instagramUrl: "https://instagram.com/tamanwisatajlengut",
  facebookUrl: "https://facebook.com",
};

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    title: "Jelajahi Alam, Belajar, dan Bersenang-senang Bersama",
    subtitle: "Taman Wisata Jlengut — Destinasi Wisata Keluarga & Edukasi di Klaten",
    image: "/images/hero/slide-1.jpg",
  },
  {
    title: "Petualangan Seru Bersama Si Kecil",
    subtitle: "Mini Zoo, Playground, dan Wahana Edukasi Alam Terbuka",
    image: "/images/hero/slide-2.jpg",
  },
  {
    title: "Ciptakan Kenangan Indah di Tengah Alam",
    subtitle: "Spot foto instagramable dengan nuansa hijau yang menyejukkan",
    image: "/images/hero/slide-3.jpg",
  },
];

// ─── ATTRACTIONS ─────────────────────────────────────────────────────────────
const attractionsRaw = [
  {
    id: "minizoo",
    name: "Mini Zoo",
    iconName: "TreePine",
    short: "Kenali ragam satwa lokal & jinak dari dekat",
    desc: "Mini Zoo Jlengut menghadirkan beragam koleksi satwa lokal mulai dari unggas, mamalia, hingga reptil. Pengunjung bisa berinteraksi langsung dengan satwa jinak seperti memberi makan kelinci, hingga menunggang kuda.",
    facilities: [
      "Kandang satwa terbuka",
      "Sesi memberi makan kelinci",
      "Wahana menunggang kuda",
      "Rumah reptil, kucing & musang",
      "Spot foto bersama satwa jinak",
    ],
    color: "#2E7D32",
    gradient: "linear-gradient(135deg,#2E7D32,#4FC3F7)",
    image: "/images/attractions/minizoo.jpg",
    heroImage: "/images/attractions/minizoo-hero.jpg",
  },
  {
    id: "playground",
    name: "Playground",
    iconName: "PlayCircle",
    short: "Area bermain luas dengan wahana aman & seru",
    desc: "Area bermain seluas 2 hektar dengan berbagai wahana berbahan ramah lingkungan. Dirancang khusus untuk anak usia 2-12 tahun dengan standar keamanan tinggi dan pengawasan staf.",
    facilities: ["Ayunan & perosotan kayu", "Flying fox mini", "Kolam bola edukatif", "Area pasir kinetik"],
    color: "#4FC3F7",
    gradient: "linear-gradient(135deg,#4FC3F7,#2E7D32)",
    image: "/images/attractions/playground.jpg",
    heroImage: "/images/attractions/playground-hero.jpg",
  },
  {
    id: "educational",
    name: "Taman Edukasi",
    iconName: "Sparkles",
    short: "Belajar pertanian, tanaman & ekosistem secara langsung",
    desc: "Wahana edukasi yang mengajak anak-anak mengenal proses bercocok tanam, siklus hidup tanaman, dan pentingnya menjaga lingkungan melalui aktivitas hands-on.",
    facilities: ["Kebun sayur edukasi", "Workshop tanam bibit", "Rumah kompos mini", "Pemandu edukasi lingkungan"],
    color: "#FFC107",
    gradient: "linear-gradient(135deg,#FFC107,#2E7D32)",
    image: "/images/attractions/educational.jpg",
    heroImage: "/images/attractions/educational-hero.jpg",
  },
  {
    id: "photospot",
    name: "Photo Spot",
    iconName: "Camera",
    short: "Spot foto estetik dengan nuansa hijau alami",
    desc: "Belasan titik foto unik tersebar di seluruh area taman, mulai dari jembatan bambu, taman bunga, hingga gapura ikonik Jlengut yang instagramable untuk segala usia.",
    facilities: ["Jembatan bambu", "Taman bunga musiman", "Gapura ikonik Jlengut", "Spot foto panorama"],
    color: "#2E7D32",
    gradient: "linear-gradient(135deg,#2E7D32,#FFC107)",
    image: "/images/attractions/photospot.jpg",
    heroImage: "/images/attractions/photospot-hero.jpg",
  },
];
export const attractions = Attraction.fromList(attractionsRaw);

// ─── ZOO ANIMALS ─────────────────────────────────────────────────────────────
const zooAnimalsRaw = [
  { id: "merak", name: "Merak", desc: "Burung merak dengan bulu ekor indah yang sering dikagumi pengunjung.", icon: "🦚", gradient: "linear-gradient(135deg,#00897B,#26A69A,#80CBC4)", longDesc: "Merak adalah salah satu satwa paling ikonik di Mini Zoo Jlengut. Burung ini dikenal karena bulu ekornya yang panjang dan berwarna-warni, yang akan dikembangkan membentuk kipas indah terutama saat musim kawin atau ketika merasa nyaman dengan lingkungan sekitarnya.", facts: ["Bulu ekor jantan bisa mencapai panjang lebih dari 1,5 meter", "Hanya merak jantan yang memiliki bulu ekor indah", "Merupakan burung nasional India dan simbol keindahan"], image: "/images/animals/merak.jpg" },
  { id: "kelinci", name: "Kelinci", desc: "Kelinci jinak yang bisa diberi makan langsung oleh pengunjung.", icon: "🐰", gradient: "linear-gradient(135deg,#F8BBD0,#F48FB1,#FFFFFF)", longDesc: "Area kelinci menjadi salah satu spot favorit anak-anak di Mini Zoo Jlengut. Kelinci di sini sudah terbiasa berinteraksi dengan manusia sehingga aman dipegang dan diberi makan langsung.", facts: ["Kelinci memiliki gigi yang terus tumbuh sepanjang hidupnya", "Mereka adalah hewan sosial yang senang hidup berkelompok", "Wortel dan sayuran hijau adalah makanan favorit mereka"], image: "/images/animals/kelinci.jpg" },
  { id: "kuda", name: "Kuda", desc: "Kuda yang bisa ditunggangi pengunjung berkeliling area taman.", icon: "🐴", gradient: "linear-gradient(135deg,#6D4C41,#8D6E63,#D7CCC8)", longDesc: "Wahana menunggang kuda adalah salah satu aktivitas berbayar tambahan yang paling diminati di Jlengut. Dipandu petugas berpengalaman untuk keamanan pengunjung.", facts: ["Kuda dapat tidur sambil berdiri", "Memiliki penglihatan hampir 360 derajat", "Telah menjadi sahabat manusia sejak ribuan tahun lalu"], image: "/images/animals/kuda.jpg" },
  { id: "kerbau", name: "Kerbau", desc: "Kerbau yang dipelihara untuk mengenalkan hewan ternak tradisional Indonesia.", icon: "🐃", gradient: "linear-gradient(135deg,#37474F,#546E7A,#90A4AE)", longDesc: "Kerbau di Mini Zoo Jlengut menjadi sarana edukasi tentang hewan ternak yang erat kaitannya dengan budaya pertanian Indonesia, khususnya di Jawa Tengah.", facts: ["Kerbau suka berkubang di lumpur untuk menjaga suhu tubuh", "Hewan penting dalam tradisi pertanian Jawa", "Memiliki tenaga kuat untuk membajak sawah"], image: "/images/animals/kerbau.jpg" },
  { id: "kambing", name: "Kambing Bertanduk 4", desc: "Kambing unik dengan empat tanduk, spot foto favorit pengunjung.", icon: "🐐", gradient: "linear-gradient(135deg,#A1887F,#BCAAA4,#EFEBE9)", longDesc: "Kambing bertanduk empat adalah salah satu daya tarik unik di Mini Zoo Jlengut. Keunikan jumlah tanduknya membuat satwa ini selalu ramai dikunjungi dan menjadi spot foto favorit.", facts: ["Kondisi empat tanduk disebabkan mutasi genetik tertentu", "Tetap hidup normal seperti kambing pada umumnya", "Sering disebut 'kambing langka' oleh pengunjung"], image: "/images/animals/kambing.jpg" },
  { id: "reptil", name: "Reptil", desc: "Koleksi reptil edukatif di rumah reptil dengan penjelasan pemandu.", icon: "🦎", gradient: "linear-gradient(135deg,#558B2F,#7CB342,#AED581)", longDesc: "Rumah Reptil di Jlengut menghadirkan berbagai jenis reptil dalam kandang kaca yang aman untuk diamati. Area ini dirancang sebagai sarana edukasi agar pengunjung memahami peran penting reptil dalam ekosistem.", facts: ["Reptil adalah hewan berdarah dingin (ektoterm)", "Banyak jenis reptil berperan mengendalikan populasi hama", "Kulitnya bersisik dan akan mengalami pergantian kulit secara berkala"], image: "/images/animals/reptil.jpg" },
  { id: "ular", name: "Ular", desc: "Berbagai jenis ular dalam kandang kaca untuk edukasi satwa melata.", icon: "🐍", gradient: "linear-gradient(135deg,#33691E,#558B2F,#9E9D24)", longDesc: "Koleksi ular di Mini Zoo Jlengut ditempatkan dalam kandang kaca tertutup rapat. Papan informasi di setiap kandang membantu pengunjung mengenali jenis ular dan karakteristiknya.", facts: ["Ular merasakan getaran untuk mendeteksi mangsa", "Tidak semua jenis ular berbisa", "Berperan penting mengendalikan populasi tikus di alam liar"], image: "/images/animals/ular.jpg" },
  { id: "kucing", name: "Kucing", desc: "Rumah kucing dengan berbagai jenis kucing ramah yang bisa disentuh.", icon: "🐱", gradient: "linear-gradient(135deg,#FF8A65,#FFAB91,#FFE0B2)", longDesc: "Rumah Kucing di Jlengut menghadirkan beberapa jenis kucing jinak yang terbiasa berinteraksi dengan pengunjung. Area ini menjadi tempat bersantai sambil mengelus dan berfoto bersama kucing.", facts: ["Kucing menghabiskan sekitar 70% hidupnya untuk tidur", "Memiliki indera penciuman jauh lebih tajam dari manusia", "Dengkuran kucing dipercaya dapat menenangkan"], image: "/images/animals/kucing.jpg" },
  { id: "musang", name: "Musang", desc: "Musang nokturnal yang menarik untuk dipelajari di rumah musang.", icon: "🐾", gradient: "linear-gradient(135deg,#4E342E,#6D4C41,#A1887F)", longDesc: "Rumah Musang menampilkan satwa nokturnal yang aktif pada malam hari namun tetap bisa diamati siang hari. Petugas memberikan penjelasan seputar kebiasaan unik musang.", facts: ["Musang adalah hewan nokturnal yang aktif di malam hari", "Memiliki kemampuan memanjat yang sangat baik", "Beberapa jenis musang membantu penyebaran biji tanaman"], image: "/images/animals/musang.jpg" },
  { id: "kura-kura", name: "Kura-kura", desc: "Kura-kura darat yang bergerak santai, cocok untuk pengamatan anak-anak.", icon: "🐢", gradient: "linear-gradient(135deg,#2E7D32,#66BB6A,#C5E1A5)", longDesc: "Kura-kura darat di Mini Zoo Jlengut bergerak dengan tenang, menjadikannya satwa yang nyaman diamati dalam waktu lama. Sering dimanfaatkan untuk mengenalkan konsep umur panjang kepada anak-anak.", facts: ["Beberapa jenis kura-kura dapat hidup lebih dari 100 tahun", "Cangkangnya merupakan bagian dari tulang belakangnya", "Bergerak lambat namun bisa bertahan tanpa makan dalam waktu lama"], image: "/images/animals/kura-kura.jpg" },
  { id: "buaya", name: "Buaya", desc: "Buaya dalam kandang aman dengan jarak pandang yang terjaga.", icon: "🐊", gradient: "linear-gradient(135deg,#1B5E20,#388E3C,#7CB342)", longDesc: "Buaya menjadi salah satu satwa yang paling menyita perhatian. Ditempatkan dalam kandang dengan pembatas aman, pengunjung bisa mengamati satwa predator ini dari jarak yang nyaman.", facts: ["Buaya dapat menahan napas di bawah air hingga satu jam", "Memiliki gigitan terkuat di antara hewan darat", "Salah satu spesies tertua yang masih bertahan hingga kini"], image: "/images/animals/buaya.jpg" },
  { id: "kera", name: "Kera", desc: "Kera yang lincah dan atraktif, menghibur pengunjung dengan tingkah lucunya.", icon: "🐒", gradient: "linear-gradient(135deg,#795548,#A1887F,#D7CCC8)", longDesc: "Kandang kera selalu ramai karena tingkah lakunya yang lincah dan atraktif. Kera di Mini Zoo Jlengut sering menghibur pengunjung dengan gerakannya yang gesit.", facts: ["Kera adalah salah satu hewan paling cerdas di dunia", "Hidup berkelompok dengan struktur sosial yang kompleks", "Memiliki kemampuan menggunakan alat sederhana untuk mencari makan"], image: "/images/animals/kera.jpg" },
];
export const zooAnimals = Animal.fromList(zooAnimalsRaw);

// ─── PHOTO SPOTS ─────────────────────────────────────────────────────────────
const photoSpotsRaw = [
  { id: "gapura", name: "Gapura Ikonik Jlengut", desc: "Gerbang utama dengan patung durian raksasa, spot wajib foto saat tiba.", gradient: "linear-gradient(135deg,#2E7D32,#66BB6A,#FFC107)", longDesc: "Gapura Ikonik Jlengut adalah titik pertama yang menyambut setiap pengunjung. Dihiasi patung durian berukuran besar sebagai simbol buah lokal khas daerah Klaten, gapura ini menjadi penanda identitas Taman Wisata Jlengut sekaligus spot foto wajib sebelum menjelajahi wahana lainnya.", tips: ["Datang pagi hari agar pencahayaan lebih lembut dan tidak ramai", "Ambil foto dari sudut rendah agar patung durian terlihat megah", "Cocok untuk foto keluarga dengan latar tulisan nama taman"], image: "/images/photospots/gapura.jpg", heroImage: "/images/photospots/gapura-hero.jpg" },
  { id: "jembatan-bambu", name: "Jembatan Bambu", desc: "Jembatan kayu-bambu yang melintasi kolam, latar foto natural dan estetik.", gradient: "linear-gradient(135deg,#8D6E63,#A1887F,#C8E6B8)", longDesc: "Jembatan Bambu membentang melintasi kolam kecil di tengah taman, menghadirkan nuansa alami dan tenang. Material bambu yang dipadukan suasana hijau sekitarnya membuat spot ini banyak diburu pengunjung yang ingin foto natural dan estetik.", tips: ["Waktu terbaik adalah sore hari saat cahaya keemasan muncul", "Manfaatkan pantulan air kolam untuk komposisi foto simetris", "Hindari jam ramai siang hari agar tidak antre lama"], image: "/images/photospots/jembatan-bambu.jpg", heroImage: "/images/photospots/jembatan-bambu-hero.jpg" },
  { id: "taman-bunga", name: "Taman Bunga Musiman", desc: "Hamparan bunga warna-warni yang berganti tiap musim, favorit foto keluarga.", gradient: "linear-gradient(135deg,#F48FB1,#FFC107,#A5D6A7)", longDesc: "Taman Bunga Musiman menghadirkan hamparan warna-warni yang berganti tergantung musim tanam. Dirancang khusus sebagai latar foto keluarga dengan jalur setapak yang aman dilalui anak-anak maupun lansia.", tips: ["Cek musim bunga yang sedang mekar sebelum berkunjung", "Spot ini ramai di akhir pekan, datang lebih awal untuk foto leluasa", "Cocok untuk foto grup keluarga besar"], image: "/images/photospots/taman-bunga.jpg", heroImage: "/images/photospots/taman-bunga-hero.jpg" },
  { id: "panorama", name: "Spot Panorama", desc: "Titik tertinggi taman dengan pemandangan luas seluruh area Jlengut.", gradient: "linear-gradient(135deg,#4FC3F7,#81D4FA,#2E7D32)", longDesc: "Spot Panorama berada di titik tertinggi area taman, menawarkan pemandangan luas ke seluruh kompleks Jlengut termasuk area Mini Zoo, Playground, dan Taman Edukasi. Favorit untuk foto landscape maupun video drone.", tips: ["Bawa kamera bersudut lebar untuk hasil maksimal", "Cuaca cerah pagi atau sore memberikan visibilitas terbaik", "Tangga menuju spot ini cukup landai, aman untuk anak-anak"], image: "/images/photospots/panorama.jpg", heroImage: "/images/photospots/panorama-hero.jpg" },
  { id: "kolam-bebek", name: "Kolam Bebek Air", desc: "Area kolam dengan wahana sepeda bebek, latar biru segar yang instagramable.", gradient: "linear-gradient(135deg,#29B6F6,#4FC3F7,#B3E5FC)", longDesc: "Kolam Bebek Air memadukan wahana bermain sepeda bebek dengan suasana kolam biru yang segar. Selain bisa menikmati wahana, pengunjung juga bisa berfoto di tepi kolam dengan latar warna biru cerah yang sangat instagramable.", tips: ["Foto dari sisi jembatan untuk mendapat sudut terbaik", "Bisa berfoto langsung di atas sepeda bebek saat bermain", "Gunakan baju warna cerah agar kontras dengan air biru"], image: "/images/photospots/kolam-bebek.jpg", heroImage: "/images/photospots/kolam-bebek-hero.jpg" },
  { id: "pendopo", name: "Pendopo Tradisional", desc: "Bangunan pendopo bernuansa Jawa, cocok untuk foto bertema budaya lokal.", gradient: "linear-gradient(135deg,#6D4C41,#A1887F,#FFC107)", longDesc: "Pendopo Tradisional menghadirkan arsitektur khas Jawa sebagai ruang teduh sekaligus latar foto bertema budaya lokal. Ukiran kayu dan ornamen tradisional memberi nuansa berbeda yang cocok untuk foto bertema kebaya atau batik.", tips: ["Cocok untuk foto formal atau bertema kebaya/batik", "Area teduh sehingga nyaman difoto kapan saja", "Manfaatkan ukiran kayu sebagai detail latar belakang"], image: "/images/photospots/pendopo.jpg", heroImage: "/images/photospots/pendopo-hero.jpg" },
];
export const photoSpots = PhotoSpot.fromList(photoSpotsRaw);

// ─── TICKET PRICES ───────────────────────────────────────────────────────────
const ticketPricesRaw = [
  { name: "Tiket Reguler", price: "Rp 35.000", desc: "Akses semua wahana umum", popular: false },
  { name: "Paket Keluarga", price: "Rp 120.000", desc: "4 orang + 1 sesi feeding satwa", popular: true },
  { name: "Paket Sekolah", price: "Rp 25.000", desc: "Min. 20 peserta + modul edukasi", popular: false },
];
export const ticketPrices = TicketPackage.fromList(ticketPricesRaw);

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqsRaw = [
  { q: "Apakah Taman Wisata Jlengut buka setiap hari?", a: "Ya, kami buka setiap hari termasuk akhir pekan dan hari libur nasional, kecuali ada pemberitahuan khusus melalui media sosial." },
  { q: "Apakah tersedia area parkir yang luas?", a: "Tersedia area parkir luas untuk mobil, bus pariwisata, dan sepeda motor dengan sistem keamanan 24 jam." },
  { q: "Bolehkah membawa makanan dari luar?", a: "Pengunjung diperbolehkan membawa bekal makanan ringan. Kami juga menyediakan food court dengan beragam pilihan kuliner lokal." },
  { q: "Apakah ada fasilitas untuk difabel?", a: "Kami menyediakan akses jalan ramah kursi roda di sebagian besar area serta toilet khusus difabel." },
  { q: "Bagaimana cara reservasi kunjungan rombongan/sekolah?", a: "Reservasi rombongan dapat dilakukan via WhatsApp minimal H-3 sebelum kunjungan." },
];
export const faqs = FaqItem.fromList(faqsRaw);

// ─── OPERATING HOURS & GUIDELINES (simple data, no model needed) ────────────
export const operatingHours = [
  { day: "Senin – Jumat", hours: "08.00 – 17.00 WIB" },
  { day: "Sabtu – Minggu", hours: "07.30 – 18.00 WIB" },
  { day: "Hari Libur Nasional", hours: "07.30 – 18.00 WIB" },
];

export const guidelines = [
  "Jaga kebersihan dan buang sampah pada tempatnya",
  "Anak-anak wajib didampingi orang tua/wali",
  "Dilarang memberi makan satwa selain di sesi yang disediakan",
  "Dilarang membawa hewan peliharaan pribadi",
  "Patuhi rambu dan arahan staf di setiap wahana",
];

// ─── GALLERY (home page) ─────────────────────────────────────────────────────
export const galleryItems = [
  { tag: "Mini Zoo", gradient: "linear-gradient(135deg,#2E7D32,#66BB6A)", image: "/images/gallery/minizoo.jpg" },
  { tag: "Playground", gradient: "linear-gradient(135deg,#4FC3F7,#2E7D32)", image: "/images/gallery/playground.jpg" },
  { tag: "Taman Edukasi", gradient: "linear-gradient(135deg,#FFC107,#2E7D32)", image: "/images/gallery/educational.jpg" },
  { tag: "Photo Spot", gradient: "linear-gradient(135deg,#2E7D32,#FFC107)", image: "/images/gallery/photospot.jpg" },
  { tag: "Satwa", gradient: "linear-gradient(135deg,#00897B,#4FC3F7)", image: "/images/gallery/satwa.jpg" },
  { tag: "Alam", gradient: "linear-gradient(135deg,#FFC107,#4FC3F7)", image: "/images/gallery/alam.jpg" },
  { tag: "Keluarga", gradient: "linear-gradient(135deg,#F48FB1,#2E7D32)", image: "/images/gallery/keluarga.jpg" },
  { tag: "Outdoor", gradient: "linear-gradient(135deg,#29B6F6,#FFC107)", image: "/images/gallery/outdoor.jpg" },
];

// ─── MISC IMAGES ──────────────────────────────────────────────────────────────
export const miscImages = {
  welcome: "/images/welcome.jpg",
  aboutHistory: "/images/about-history.jpg",
  logo: "/images/logo-placeholder.jpg",
};

// ─── TESTIMONIAL ──────────────────────────────────────────────────────────────
export const testimonial = {
  quote:
    "Anak-anak betah seharian di Jlengut! Selain bisa main bebas, mereka juga jadi belajar banyak soal hewan dan tanaman. Tempatnya bersih dan asri banget.",
  author: "Keluarga Bapak Santoso — Yogyakarta",
  rating: 5,
};

// ─── STATS (home intro section) ──────────────────────────────────────────────
export const homeStats = [
  { value: "30+", label: "Jenis Satwa" },
  { value: "15+", label: "Wahana" },
  { value: "50rb+", label: "Pengunjung/Thn" },
];
