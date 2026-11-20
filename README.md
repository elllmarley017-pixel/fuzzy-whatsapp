📱 fuzzy-whatsapp

WhatsApp Bot sederhana berbasis Node.js dengan struktur modular.

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#-lisensi)
---

📖 Tentang

fuzzy-whatsapp adalah project bot WhatsApp yang dibangun menggunakan Node.js. Repository ini memiliki struktur modular yang memisahkan antara konfigurasi, handler pesan, database, dan entry point aplikasi sehingga mudah dikembangkan dan dipelajari.

---

✨ Fitur

· 🤖 Bot WhatsApp otomatis
· ⚙️ Konfigurasi terpusat via config.js
· 🗂️ Penyimpanan data menggunakan folder database
· 🔌 Handler pesan modular di Handle.js
· 🚀 Entry point sederhana di main.js

---

📂 Struktur Repository

```text
fuzzy-whatsapp/
│
├── database/            # Penyimpanan data (session, user, dll)
├── node_modules/        # Dependensi npm
│
├── Handle.js            # Logika handler pesan
├── Link Grup Update.txt # Link grup pembaruan
├── config.js            # Konfigurasi bot
├── main.js              # Entry point aplikasi
├── package.json         # Metadata & dependensi project
└── package-lock.json    # Lockfile dependensi
```

---

⚙️ Prasyarat

Pastikan sudah ter-install:

Kebutuhan Versi Minimal
Node.js v18 atau lebih baru
npm v9 atau lebih baru
Git -

---

🚀 Instalasi

1. Clone Repository

```bash
git clone https://github.com/elllmarley017-pixel/fuzzy-whatsapp.git
cd fuzzy-whatsapp
```

2. Install Dependensi

```bash
npm install
```

3. Konfigurasi

Sesuaikan file config.js sesuai kebutuhan:

```js
// config.js
module.exports = {
  ownerNumber: "628xxxxxxxxxx",
  botName: "fuzzy-whatsapp",
  // ...konfigurasi lainnya
};
```

4. Jalankan Bot

```bash
node main.js
```

Atau menggunakan npm script (jika tersedia):

```bash
npm start
```

---

📝 Penggunaan

1. Setelah bot berjalan, scan QR Code yang muncul di terminal menggunakan WhatsApp.
2. Bot siap menerima dan membalas pesan sesuai logika di Handle.js.
3. Untuk update informasi, cek file Link Grup Update.txt.

---

🛠️ Pengembangan

Ingin menambahkan fitur baru? Cukup edit file berikut:

File Fungsi
config.js Mengatur konfigurasi bot
Handle.js Menambah logika balasan/command
main.js Entry point & inisialisasi
database/ Menambah/mengatur storage data

Contoh menambahkan command sederhana di Handle.js:

```js
if (text === "ping") {
  await sock.sendMessage(sender, { text: "Pong! 🏓" });
}
```

---

🤝 Kontribusi

Kontribusi sangat terbuka! Silakan:

1. Fork repository ini
2. Buat branch baru: git checkout -b fitur-keren
3. Commit perubahan: git commit -m "Menambahkan fitur keren"
4. Push ke branch: git push origin fitur-keren
5. Buat Pull Request

---

⚠️ Disclaimer

Project ini dibuat untuk keperluan edukasi. Penggunaan bot WhatsApp di luar ketentuan resmi WhatsApp dapat menyebabkan akun diblokir. Gunakan dengan bijak dan tanggung jawab pribadi.

---

📄 Lisensi

Project ini dilisensikan di bawah MIT License. Lihat file LICENSE untuk detail (jika tersedia).

---

📬 Kontak

· GitHub: @elllmarley017-pixel
· Grup Update: Lihat file Link Grup Update.txt

---

<p align="center">
  Dibuat dengan ❤️ menggunakan <strong>Node.js</strong>
</p>
