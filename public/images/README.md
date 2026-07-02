# Dummy Photos — Panduan Mengganti

Semua gambar di folder ini adalah **placeholder** (foto dummy) yang dibuat
otomatis, bukan foto asli. Nama filenya sudah disesuaikan dengan yang
dipanggil oleh `src/data/mockData.js`, jadi mengganti foto **tidak perlu
mengubah kode apapun** — cukup timpa (overwrite) file dengan foto asli
memakai nama file & format yang sama (`.jpg`).

## Struktur folder & ukuran yang disarankan

| Folder         | Dipakai untuk                         | Rasio disarankan | Ukuran contoh |
|----------------|----------------------------------------|-------------------|----------------|
| `attractions/` | Kartu & hero 4 wahana utama             | 4:3 (kartu), 16:9 (hero) | 800×600 / 1600×900 |
| `animals/`     | 12 kartu satwa Mini Zoo                 | 1:1 (persegi)      | 600×600 |
| `photospots/`  | 6 kartu & hero titik foto                | 1:1 (kartu), 16:9 (hero)  | 700×700 / 1600×900 |
| `hero/`        | 3 slide hero halaman utama               | 16:9 (lebar penuh) | 1920×1080 |
| `gallery/`     | 8 foto galeri di halaman utama           | 1:1 (persegi)      | 500×500 |
| root           | `welcome.jpg`, `about-history.jpg`, `logo-placeholder.jpg` | 4:3 / 1:1 | sesuaikan |

## Cara mengganti

1. Siapkan foto asli dengan rasio yang mendekati tabel di atas (component
   `Pill` akan meng-crop otomatis dengan `object-cover`, jadi tidak perlu
   presisi).
2. Beri nama file **persis sama** dengan file dummy yang digantikan, contoh:
   - `public/images/animals/merak.jpg` → ganti dengan foto merak asli,
     simpan dengan nama file yang sama.
3. Simpan/timpa file tersebut. Refresh browser — foto baru otomatis tampil.

## Menambah entitas baru (misal satwa baru)

1. Tambahkan objek baru ke array terkait di `src/data/mockData.js`
   (mengikuti field yang sudah ada, termasuk `image: "/images/animals/nama-baru.jpg"`).
2. Taruh file foto di path tersebut.

Tidak perlu menyentuh komponen React manapun — struktur OOP di
`src/models/` sudah menangani rendering & fallback (jika file foto belum
ada, komponen `Pill` otomatis menampilkan gradient warna sebagai pengganti).
