# Taman Wisata Jlengut — Website

Website resmi Taman Wisata Jlengut (Klaten, Jawa Tengah), dibangun ulang dari
prototipe single-file HTML menjadi proyek **React + Vite** dengan struktur
**OOP (Object-Oriented Programming)** untuk memudahkan maintainability.

## ✨ Fitur

- Landing page dengan hero slider, galeri, testimoni
- Halaman detail Wahana (Mini Zoo, Playground, Taman Edukasi, Photo Spot)
- Halaman detail Satwa (12 satwa Mini Zoo) & Titik Foto (6 spot)
- Halaman Tiket & Booking (integrasi WhatsApp)
- Halaman Information Center (jam operasional, panduan, FAQ accordion)
- Halaman About Us (sejarah, visi-misi, peta lokasi)
- Navigasi responsif dengan dropdown bertingkat (desktop) & drawer (mobile)
- Tombol WhatsApp mengambang di semua halaman
- **Foto dummy** siap pakai di `public/images/` — tinggal diganti tanpa ubah kode

**Manfaatnya:**
- Perubahan perilaku (misal cara membangun pesan WhatsApp) cukup diubah di
  satu tempat (dalam class), bukan dicari-cari di banyak file JSX
- Bentuk data terjamin lewat constructor — mengurangi bug karena field yang hilang
- Menambah entitas baru (satwa baru, wahana baru) tinggal menambah data di
  `src/data/mockData.js`, tidak perlu menyentuh komponen
- Kode lebih mudah dites & dibaca oleh developer baru

## 📁 Struktur Folder

```
taman-wisata-jlengut/
├── package.json
├── index.html
├── public/
│   └── images/            ← foto dummy, siap diganti (lihat README di dalamnya)
├── src/
│   ├── main.jsx           ← entry point + router
│   ├── App.jsx             ← layout & routes
│   ├── index.css
│   ├── models/             ← class OOP (Attraction, Animal, PhotoSpot, dst)
│   ├── data/
│   │   └── mockData.js     ← satu-satunya sumber data konten (edit di sini)
│   ├── utils/
│   │   └── whatsapp.js     ← helper buka chat WhatsApp
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Icon.jsx
│   │   └── Common/
│   │       ├── FadeIn.jsx
│   │       ├── Pill.jsx     ← komponen gambar+gradient (dipakai di semua kartu)
│   │       └── StaticMap.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── AttractionPage.jsx
│       ├── AnimalPage.jsx
│       ├── PhotoSpotPage.jsx
│       ├── TicketsPage.jsx
│       ├── InfoPage.jsx
│       └── AboutPage.jsx
```

## 🚀 Menjalankan Proyek

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173`.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## 🖼️ Mengganti Foto Dummy

Lihat `public/images/README.md` — cukup timpa file dengan nama yang sama,
tidak perlu mengubah kode.

## 📞 Konfigurasi Kontak

Nomor WhatsApp, alamat, email, dan link Google Maps dikonfigurasi di satu
tempat: `src/data/mockData.js` (lihat `WA_NUMBER`, `CONTACT`, `MAPS_URL`).
