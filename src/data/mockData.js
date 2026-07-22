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
export const WA_NUMBER = "6285728181484";
export const MAPS_URL = "https://share.google/H8VbGA4kiB5ICnGIh";
export const CONTACT = {
  address:
    "Jl. Jlengut Indah, Barepan, Geneng, Karangduren, Kec. Kebonarum, Kabupaten Klaten, Jawa Tengah 57486",
  phone: "0857-2818-1484",
  phoneHref: "+6285728181484",
  email: "newtamanjlengut@gmail.com",
  instagram: "@newtamanjlengut",
  instagramUrl: "https://www.instagram.com/newtamanjlengut/",
  facebookUrl: "https://web.facebook.com/NewTamanJlengut/?_rdc=1&_rdr",
};

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    title: "Jelajahi Alam, Belajar, dan Bersenang-senang Bersama",
    subtitle: "New Taman Jlengut — Destinasi Wisata Keluarga & Edukasi di Klaten",
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
  {
    id: "rusa-tutul",
    name: "Rusa Tutul",
    desc: "Rusa sosial yang aktif di pagi dan sore hari.",
    icon: "🦌",
    gradient: "linear-gradient(135deg,#8D6E63,#A1887F,#D7CCC8)",
    longDesc: "Rusa Tutul (Axis axis) adalah mamalia dari famili Cervidae yang menghuni padang rumput dan hutan terbuka. Rusa ini memiliki sifat vivipar dan memakan rumput segar, dedaunan, buah-buahan, serta mineral blok.",
    facts: [
      "Corak tutulnya tidak akan hilang hingga dewasa.",
      "Hanya rusa jantan yang memiliki tanduk yang bisa rontok dan tumbuh baru setiap tahun.",
      "Pintar melompat tinggi untuk menghindari bahaya."
    ],
    image: "/images/animals/rusa-tutul.jpg"
  },
  {
    id: "tikus-belanda",
    name: "Tikus Belanda",
    desc: "Hewan sosial asal Pegunungan Andes yang aktif bersuara.",
    icon: "🐹",
    gradient: "linear-gradient(135deg,#FFB74D,#FFCC80,#FFE0B2)",
    longDesc: "Tikus Belanda (Cavia porcellus) adalah mamalia dari ordo Rodentia. Hewan ini sangat sosial, berkomunikasi dengan cicitan khas, dan memakan rumput segar serta dedaunan.",
    facts: [
      "Bukan asli dari Belanda, melainkan dari Amerika Selatan.",
      "Giginya tumbuh terus seumur hidup, sehingga harus rajin mengunyah rumput.",
      "Suka mengeluarkan suara 'wheek-wheek' saat merasa senang atau meminta makan."
    ],
    image: "/images/animals/tikus-belanda.jpg"
  },
  {
    id: "monyet-ekor-panjang",
    name: "Monyet Ekor Panjang",
    desc: "Monyet cerdas dengan hierarki kelompok sosial yang kuat.",
    icon: "🐒",
    gradient: "linear-gradient(135deg,#795548,#A1887F,#D7CCC8)",
    longDesc: "Monyet Ekor Panjang (Macaca fascicularis) menghuni hutan pesisir dan hutan hujan. Mamalia primata ini sangat cerdas, aktif di siang hari, dan memakan buah, daun, serangga, serta kepiting kecil.",
    facts: [
      "Sangat pintar berenang dan tidak takut air untuk mencari makan.",
      "Memiliki kantong di pipi untuk menyimpan makanan sementara waktu.",
      "Hidup dalam kelompok ketat yang dipimpin oleh raja (alpha male)."
    ],
    image: "/images/animals/monyet-ekor-panjang.jpg"
  },
  {
    id: "kelinci-lepus",
    name: "Kelinci",
    desc: "Mamalia lincah yang suka menggali lubang di tanah untuk berlindung.",
    icon: "🐰",
    gradient: "linear-gradient(135deg,#F8BBD0,#F48FB1,#FFFFFF)",
    longDesc: "Kelinci (Lepus sp.) menghuni padang rumput dan semak belukar. Hewan herbivora ini memiliki masa kehamilan 30-32 hari dan memakan rumput segar, sayuran hijau, serta umbi-umbian.",
    facts: [
      "Telinga panjangnya berfungsi sebagai pendingin (AC) alami untuk menyerap panas tubuh.",
      "Posisi mata di samping membuatnya bisa melihat 360 derajat tanpa menoleh.",
      "Melompat sambil memutar badan di udara (binky) saat merasa sangat senang."
    ],
    image: "/images/animals/kelinci-lepus.jpg"
  },
  {
    id: "kakatua-maluku",
    name: "Kakatua Maluku",
    desc: "Burung kakatua yang sangat sosial dengan jambul kemerahan.",
    icon: "🦜",
    gradient: "linear-gradient(135deg,#FF8A65,#FFAB91,#FFE0B2)",
    longDesc: "Kakatua Maluku (Cacatua moluccensis) adalah burung yang sangat sosial. Jambul merah-mudanya akan ditegakkan saat merasa terancam atau gembira. Burung ini mengerami telurnya secara bergantian dengan pasangan.",
    facts: [
      "Suara teriakannya sangat kencang untuk komunikasi jarak jauh di hutan.",
      "Sangat manja dan bisa stres mencabuti bulunya sendiri jika kesepian.",
      "Paruhnya sangat kuat, mampu memecahkan batok kelapa."
    ],
    image: "/images/animals/kakatua-maluku.jpg"
  },
  {
    id: "merak-biru",
    name: "Merak Biru",
    desc: "Burung dengan bulu ekor memukau yang dipamerkan untuk memikat betina.",
    icon: "🦚",
    gradient: "linear-gradient(135deg,#1976D2,#42A5F5,#BBDEFB)",
    longDesc: "Merak Biru (Pavo cristatus) menghuni hutan tropis terbuka. Burung jantan memiliki perilaku khas memamerkan bulu ekornya untuk memikat betina, dan memakan biji-bijian, serangga, serta reptil kecil.",
    facts: [
      "Hanya merak jantan yang memiliki ekor indah berupa kipas raksasa.",
      "Tetap bisa terbang tinggi untuk tidur di atas pohon meskipun ekornya berat.",
      "Ekor indahnya akan rontok sendiri setelah musim kawin selesai."
    ],
    image: "/images/animals/merak-biru.jpg"
  },
  {
    id: "angsa-putih",
    name: "Angsa Putih",
    desc: "Burung air teritorial yang sangat protektif terhadap kelompoknya.",
    icon: "🦢",
    gradient: "linear-gradient(135deg,#E0E0E0,#F5F5F5,#FFFFFF)",
    longDesc: "Angsa Putih (Anser anser domesticus) menghuni area lahan basah. Burung herbivora ini bersifat teritorial dan mengeluarkan suara lantang saat terancam.",
    facts: [
      "Simbol kesetiaan karena hanya memiliki satu pasangan seumur hidup.",
      "Sangat galak dan protektif jika ada yang mendekati sarangnya.",
      "Memiliki ingatan yang kuat dan bisa mengenali wajah manusia."
    ],
    image: "/images/animals/angsa-putih.jpg"
  },
  {
    id: "burung-kareo-padi",
    name: "Burung Kareo Padi",
    desc: "Burung pemalu yang sering berjalan di tanah basah sambil menghentakkan ekornya.",
    icon: "🐦",
    gradient: "linear-gradient(135deg,#5D4037,#8D6E63,#D7CCC8)",
    longDesc: "Burung Kareo Padi (Amaurornis phoenicurus) menghuni rawa-rawa dan sawah. Memakan serangga air, cacing, siput, dan tunas muda.",
    facts: [
      "Lebih suka berlari cepat di semak-semak daripada terbang.",
      "Jari kakinya sangat panjang agar tidak tenggelam di lumpur atau tanaman air.",
      "Suaranya nyaring terdengar seperti ketukan 'ku-wook, ku-wook'."
    ],
    image: "/images/animals/burung-kareo-padi.jpg"
  },
  {
    id: "burung-tekukur",
    name: "Burung Tekukur",
    desc: "Burung tenang yang sering terlihat berpasangan mencari makan di tanah.",
    icon: "🕊️",
    gradient: "linear-gradient(135deg,#8D6E63,#BCAAA4,#EFEBE9)",
    longDesc: "Burung Tekukur (Spilopelia chinensis) menghuni hutan terbuka dan pemukiman. Mereka mengerami telur berdua (jantan dan betina) serta memakan biji-bijian.",
    facts: [
      "Kicauan 'ku-ku-kuup' yang khas memberikan suasana pedesaan yang tenang.",
      "Sangat mudah jinak dan beradaptasi di sekitar rumah manusia.",
      "Sarangnya sangat sederhana, hanya tumpukan beberapa ranting pohon."
    ],
    image: "/images/animals/burung-tekukur.jpg"
  },
  {
    id: "burung-jalak-hitam",
    name: "Burung Jalak Hitam",
    desc: "Burung adaptif yang gemar berkumpul dalam kelompok besar dan bising.",
    icon: "🐦",
    gradient: "linear-gradient(135deg,#212121,#424242,#757575)",
    longDesc: "Burung Jalak Hitam (Acridotheres javanicus) sangat adaptif. Mereka hidup berkelompok, memakan serangga dan buah, serta sering meletakkan telur di lubang pohon.",
    facts: [
      "Menjadi mitra petani karena suka hinggap di punggung kerbau untuk memakan kutu.",
      "Pintar menirukan suara burung lain hingga suara manusia.",
      "Hidup dalam kelompok besar dan sangat bising."
    ],
    image: "/images/animals/burung-jalak-hitam.jpg"
  },
  {
    id: "burung-cucak-kutilang",
    name: "Burung Cucak Kutilang",
    desc: "Burung lincah yang aktif berkicau dan suka berpindah dahan.",
    icon: "🎶",
    gradient: "linear-gradient(135deg,#558B2F,#8BC34A,#DCEDC8)",
    longDesc: "Burung Cucak Kutilang (Pycnonotus aurigaster) menghuni taman kota hingga pekarangan. Memakan buah lunak dan serangga kecil, serta membuat sarang berbentuk mangkuk.",
    facts: [
      "Jambul di kepalanya akan berdiri otomatis saat kaget, senang, atau waspada.",
      "Sangat menyukai buah-buahan manis seperti pepaya dan pisang.",
      "Membantu menanam pohon melalui biji buah yang keluar dari kotorannya."
    ],
    image: "/images/animals/burung-cucak-kutilang.jpg"
  },
  {
    id: "ayam-mutiara",
    name: "Ayam Mutiara",
    desc: "Unggas adaptif yang sering menjadi alarm alami bagi lingkungannya.",
    icon: "🐔",
    gradient: "linear-gradient(135deg,#607D8B,#90A4AE,#CFD8DC)",
    longDesc: "Ayam Mutiara (Numida meleagris) adalah aves berkelompok yang adaptif. Bersifat ovipar dan memakan serangga, buah-buahan manis, serta sisa makanan.",
    facts: [
      "Menjadi 'alarm alami' karena akan berteriak bising jika melihat orang asing atau predator.",
      "Jago berburu hama seperti ulat, kutu, dan bahkan ular kecil.",
      "Lebih suka berjalan beriringan dalam kelompok daripada terbang."
    ],
    image: "/images/animals/ayam-mutiara.jpg"
  },
  {
    id: "ayam-domestik",
    name: "Ayam Domestik",
    desc: "Unggas peliharaan yang suka mengais tanah di siang hari.",
    icon: "🐓",
    gradient: "linear-gradient(135deg,#D84315,#FF5722,#FFAB91)",
    longDesc: "Ayam Domestik (Gallus gallus domesticus) dipelihara di pedesaan maupun peternakan. Memiliki masa eram 21 hari dan memakan dedak, biji-bijian, cacing, serta sisa makanan.",
    facts: [
      "Secara ilmiah merupakan kerabat jauh dari dinosaurus T-Rex (theropoda), namun asalnya dari ayam hutan merah.",
      "Bisa mengingat dan mengenali lebih dari 100 wajah manusia atau sesama ayam.",
      "Memiliki 30 jenis suara berbeda untuk berkomunikasi."
    ],
    image: "/images/animals/ayam-domestik.jpg"
  },
  {
    id: "belibis-kembang",
    name: "Belibis Kembang",
    desc: "Burung air nokturnal yang mahir menyelam dan bersiul.",
    icon: "🦆",
    gradient: "linear-gradient(135deg,#4E342E,#795548,#BCAAA4)",
    longDesc: "Belibis Kembang (Dendrocygna arcuata) menghuni danau dan rawa tawar. Hewan sosial ini mahir menyelam mencari makan seperti tanaman air dan pucuk rumput.",
    facts: [
      "Tidak berbunyi 'kwek-kwek', melainkan bersiul nyaring seperti burung.",
      "Merupakan hewan malam (nokturnal) yang aktif terbang mencari makan saat gelap.",
      "Sangat pintar menyelam untuk berburu tanaman air dan serangga."
    ],
    image: "/images/animals/belibis-kembang.jpg"
  },
  {
    id: "ayam-kalkun",
    name: "Ayam Kalkun",
    desc: "Unggas besar yang jantannya memamerkan bulu ekor mekar untuk memikat betina.",
    icon: "🦃",
    gradient: "linear-gradient(135deg,#3E2723,#5D4037,#8D6E63)",
    longDesc: "Ayam Kalkun (Meleagris gallopavo) berasal dari hutan dan area semak. Jantannya gemar memamerkan pial merah, dan memakan biji-bijian, daun segar, serangga, serta buah beri.",
    facts: [
      "Kalkun jantan bisa mekar seperti kipas bundar yang besar.",
      "Kulit lehernya bisa berubah warna (merah, putih, biru) menyesuaikan suasana hati.",
      "Kalkun liar bisa terbang pendek dan tidur di dahan pohon."
    ],
    image: "/images/animals/ayam-kalkun.jpg"
  },
  {
    id: "kakatua-jambul-kuning",
    name: "Kakatua Jambul Kuning",
    desc: "Burung vokal yang cerdas dan sering menegakkan jambul kuningnya.",
    icon: "🦜",
    gradient: "linear-gradient(135deg,#FBC02D,#FFF176,#FFF9C4)",
    longDesc: "Kakatua Jambul Kuning (Cacatua sulphurea) adalah burung dari famili Cacatuidae yang sangat aktif. Mereka bersarang di lubang pohon tinggi dan memakan buah serta biji keras.",
    facts: [
      "Jambul kuningnya berdiri tegak saat kaget atau senang.",
      "Sangat cerdas, setara dengan anak balita, dan bisa memecahkan teka-teki sederhana.",
      "Mayoritas bersifat 'kidal' karena lebih sering menggunakan kaki kiri untuk memegang makanan."
    ],
    image: "/images/animals/kakatua-jambul-kuning.jpg"
  },
  {
    id: "ayam-pegar-emas",
    name: "Ayam Pegar Emas",
    desc: "Burung terestrial dari hutan bambu dengan jantan berbulu keemasan.",
    icon: "🦚",
    gradient: "linear-gradient(135deg,#FFD54F,#FFE082,#FFECB3)",
    longDesc: "Ayam Pegar Emas (Chrysolophus pictus) berasal dari pegunungan. Jantannya pamer bulu berwarna keemasan untuk menarik betina, serta memakan biji-bijian dan pucuk bambu.",
    facts: [
      "Hanya pejantan yang berwarna-warni emas-merah, betinanya hanya berwarna cokelat kusam.",
      "Jago bersembunyi di lantai hutan semak yang gelap dari kejaran pemangsa.",
      "Lebih suka berlari cepat di tanah daripada terbang saat terancam."
    ],
    image: "/images/animals/ayam-pegar-emas.jpg"
  },
  {
    id: "buaya-muara",
    name: "Buaya Muara",
    desc: "Pemangsa puncak air payau yang mematikan dan tersembunyi.",
    icon: "🐊",
    gradient: "linear-gradient(135deg,#1B5E20,#388E3C,#A5D6A7)",
    longDesc: "Buaya Muara (Crocodylus porosus) menghuni muara sungai dan rawa. Betinanya bisa menghasilkan 40-60 butir telur yang diletakkan di gundukan vegetasi dan dijaga ketat.",
    facts: [
      "Spesies reptil terbesar di bumi yang bertahan sejak zaman purba.",
      "Kekuatan gigitannya paling mematikan di dunia (mengalahkan singa & hiu).",
      "Bisa melompat lurus keluar dari air berkat ekornya yang berotot."
    ],
    image: "/images/animals/buaya-muara.jpg"
  },
  {
    id: "kura-kura-air",
    name: "Kura-kura Air",
    desc: "Reptil semi-akuatik yang tangguh dari perairan tawar.",
    icon: "🐢",
    gradient: "linear-gradient(135deg,#33691E,#558B2F,#C5E1A5)",
    longDesc: "Kura-kura Air (Cuora amboinensis) menghuni perairan tenang. Bersifat semi-akuatik dan dapat menutup tempurungnya rapat saat terancam.",
    facts: [
      "Tempurungnya menyatu dengan tulang belakang, jadi tidak bisa lepas dari cangkang.",
      "Bisa menyerap oksigen melalui area belakang tubuh saat menyelam lama.",
      "Memiliki rentang umur 25-40 tahun yang lebih pendek daripada kura-kura darat raksasa."
    ],
    image: "/images/animals/kura-kura-air.jpg"
  },
  {
    id: "ular-sanca",
    name: "Ular Sanca",
    desc: "Reptil melilit nokturnal yang dapat memangsa hewan berukuran besar.",
    icon: "🐍",
    gradient: "linear-gradient(135deg,#F57F17,#FBC02D,#FFF59D)",
    longDesc: "Ular Sanca (Malayopython reticulatus) adalah hewan nokturnal yang melumpuhkan mangsanya dengan lilitan. Induknya meliliti telur untuk menjaga kehangatan dan kelembapan.",
    facts: [
      "Menjulurkan lidah bukan untuk mengejek, melainkan untuk 'mencicipi' aroma di udara.",
      "Tidak memiliki kelopak mata, sehingga ular selalu tidur dengan mata terbuka.",
      "Bisa menelan mangsa 3 kali lebih besar dari kepalanya karena rahangnya yang lentur."
    ],
    image: "/images/animals/ular-sanca.jpg"
  },
  {
    id: "biawak-air",
    name: "Biawak Air",
    desc: "Pemanjat dan perenang andal pemakan segala yang menjaga keseimbangan ekosistem.",
    icon: "🦎",
    gradient: "linear-gradient(135deg,#37474F,#546E7A,#CFD8DC)",
    longDesc: "Biawak Air (Varanus salvator) hidup di tepi sungai atau hutan mangrove. Reptil ovipar ini aktif di siang hari dan memakan segalanya, mulai dari kepiting, telur, hingga bangkai.",
    facts: [
      "Perenang andal yang bisa menahan napas lama di dalam air.",
      "Lidah bercabangnya digunakan untuk mendeteksi bau bangkai dari jarak jauh.",
      "Suka memakan telur dan sisa makanan, bertugas sebagai pembersih alami ekosistem."
    ],
    image: "/images/animals/biawak-air.jpg"
  },
  {
    id: "pulai",
    name: "Pulai",
    desc: "Pohon pelindung dengan tajuk bertingkat yang melebar rapi.",
    icon: "🌳",
    gradient: "linear-gradient(135deg,#1B5E20,#4CAF50,#A5D6A7)",
    longDesc: "Pulai (Alstonia scholaris) tumbuh subur di hutan dataran rendah. Berkembang biak generatif lewat biji halus berserabut, maupun vegetatif dengan stek.",
    facts: [
      "Nama 'scholaris' diambil karena kayunya sering digunakan membuat papan tulis sekolah di India.",
      "Kulit batangnya sering dijadikan jamu tradisional yang ampuh mengobati malaria."
    ],
    image: "/images/animals/pulai.jpg"
  },
  {
    id: "ketapang",
    name: "Ketapang",
    desc: "Tumbuhan peneduh pesisir yang daunnya memerah sebelum gugur.",
    icon: "🍂",
    gradient: "linear-gradient(135deg,#8D6E63,#D32F2F,#FFCDD2)",
    longDesc: "Ketapang (Terminalia catappa) merupakan tumbuhan yang banyak ditemui di pesisir dan perkotaan. Bijinya berstruktur ringan sehingga mudah disebarkan oleh arus air.",
    facts: [
      "Daun ketapang kering adalah 'sahabat' bagi pemelihara ikan hias, khususnya cupang.",
      "Jika membusuk di air, daun ini mengeluarkan zat tanin yang membersihkan air dari bakteri, menurunkan pH, dan mencerahkan warna ikan."
    ],
    image: "/images/animals/ketapang.jpg"
  },
  {
    id: "kencana-ungu",
    name: "Kencana Ungu",
    desc: "Tumbuhan hias dengan bunga ungu cerah yang terus menerus mekar.",
    icon: "🌸",
    gradient: "linear-gradient(135deg,#6A1B9A,#AB47BC,#E1BEE7)",
    longDesc: "Kencana Ungu (Ruellia simplex) adalah semak adaptif di area terbuka bersinar matahari penuh. Tanaman ini mudah diperbanyak dengan stek batang atau biji.",
    facts: [
      "Tanaman ini memiliki cara unik untuk menyebar biji, yaitu menggunakan sistem ledakan.",
      "Jika kapsul bijinya yang kering terkena air hujan, ia akan pecah dan melontarkan bijinya jauh dari pohon."
    ],
    image: "/images/animals/kencana-ungu.jpg"
  },
  {
    id: "ki-serut",
    name: "Ki Serut",
    desc: "Tumbuhan berkayu dengan percabangan unik yang populer jadi bonsai.",
    icon: "🪴",
    gradient: "linear-gradient(135deg,#33691E,#8BC34A,#DCEDC8)",
    longDesc: "Ki Serut (Streblus asper) tumbuh di hutan kering dan semak belukar. Memiliki buah kecil berwarna kuning atau oranye dan mudah dikembangbiakkan dengan cangkok.",
    facts: [
      "Sebelum ada kertas modern, orang kuno di Thailand menggunakan kulit pohon ini untuk membuat kertas khoi.",
      "Catatan penting kerajaan dan kitab keagamaan ratusan tahun lalu ditulis di atasnya karena awet dan tidak dimakan rayap/semut."
    ],
    image: "/images/animals/ki-serut.jpg"
  },
  {
    id: "melati-mayang",
    name: "Melati Mayang",
    desc: "Pohon kecil berdaun lebat dengan bunga putih yang sangat harum.",
    icon: "💮",
    gradient: "linear-gradient(135deg,#FAFAFA,#E0E0E0,#9E9E9E)",
    longDesc: "Melati Mayang (Ligustrum sinense) tumbuh di hutan terbuka dan pekarangan. Menghasilkan buah bulat kecil berwarna ungu kehitaman.",
    facts: [
      "Berbeda dari bunga lain yang menarik serangga di siang hari, bunga ini mengeluarkan aroma sangat wangi di malam hari.",
      "Hal ini bertujuan untuk mengundang ngengat atau kupu-kupu malam membantu proses penyerbukan."
    ],
    image: "/images/animals/melati-mayang.jpg"
  },
  {
    id: "bambu-ampel",
    name: "Bambu Ampel",
    desc: "Bambu cepat tumbuh yang dapat menahan erosi dan longsor.",
    icon: "🎋",
    gradient: "linear-gradient(135deg,#388E3C,#66BB6A,#C8E6C9)",
    longDesc: "Bambu Ampel (Bambusa vulgaris) membentuk rumpun rapat dan sering ditemui di tepi sungai atau dataran rendah. Berkembang biak utamanya melalui rebung.",
    facts: [
      "Pertumbuhannya sangat cepat, rebungnya bisa bertambah tinggi puluhan sentimeter hanya dalam waktu 24 jam.",
      "Akarnya yang menyebar rapat menjadi tanggul alami yang sangat ampuh untuk menahan longsor di pinggir sungai."
    ],
    image: "/images/animals/bambu-ampel.jpg"
  },
  {
    id: "pohon-naga",
    name: "Pohon Naga",
    desc: "Tanaman tahan banting yang menyukai kondisi minim air.",
    icon: "🌵",
    gradient: "linear-gradient(135deg,#C62828,#EF5350,#FFCDD2)",
    longDesc: "Pohon Naga (Dracaena marginata) adalah tanaman hias dengan daun berbentuk pedang tepi merah. Berkembang biak lewat stek batang atau pemisahan anakan.",
    facts: [
      "Walaupun buahnya terlihat eksotis, tanaman ini sebenarnya termasuk jenis kaktus yang merambat.",
      "Bunganya yang besar hanya mekar semalam saja lalu layu setelah matahari terbit di pagi hari."
    ],
    image: "/images/animals/pohon-naga.jpg"
  }
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
  { name: "Paket Hemat", price: "Rp 65.000", desc: "Tiket Masuk, Sewa Tempat, Kebersihan, Trainer Outbound, Dokumentasi, Tour Satwa, Snack", popular: false },
  { name: "Paket Seru", price: "Rp 75.000", desc: "Tiket Masuk, Sewa Tempat, Kebersihan, Trainer Outbound, Dokumentasi, Tour Satwa, Snack,Tubing", popular: true },
  { name: "Paket Lengkap", price: "Rp 90.000", desc: "Tiket Masuk, Sewa Tempat, Kebersihan, Trainer Outbound, Dokumentasi, Tour Satwa, Snack,Tubing, Makan", popular: false },
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
