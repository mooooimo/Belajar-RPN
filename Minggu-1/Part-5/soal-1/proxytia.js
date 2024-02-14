/* 
========================= TUGAS =========================
- Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
- Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
- Yaitu nama dan peran. Variabel peran harus memiliki isi data,
- Bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
- Bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
- Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
- Tugas Anda adalah untuk membuat program yang mengecek isi variabel
- Peran serta mengeluarkan respon sesuai isi variabel tersebut.
- Ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
Output:
- Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
- Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
- Halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
- Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
========================= TUGAS =========================

========================= TIPS =========================
- Tips belajar penggunaan `` (backtick) pada javascript agar
- Mudah dalam memasukan variabel ke dalam string
- Tapi tanpa backtick juga ga masalah sih yg penting output sesuai
========================= TIPS =========================

========================= ALGORITMA =========================
- Isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
1. Membuat variable untuk menampung masing-masing data input nama dan peran
2. Mengecek variable nama
3. Jika kosong akan diberi peringatan untuk mengisi terlebih dahulu
4. Mengecek variable peran
5. Jika kosong akan diberi 4 pilihan:
   1. Ksatria, output: Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
   2. Tabib, output: Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
   3. Penyihir, output: Halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
   4. Null (Tidak memilih), output: Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
========================= ALGORITMA =========================
*/

// ========================= CODE =========================
//code disini gunakan console.log untuk outputnya

let nama = "",
  peran = "";

if (nama == "") {
  console.log("Nama wajib diisi!");
} else {
  if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game!");
  }
}
