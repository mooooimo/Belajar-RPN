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
// code disini gunakan console.log untuk outputnya

// Memberikan variable untuk wadah data nama dan peran

let nama = "Imo",
  peran = "Penyihir";

// Mengecek variable nama
if (nama == "") {
  console.log("nama wajib diisi");
} else {
  // Mengecek variable Peran
  if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game");
  } else {
    // Memberikan output sesuai Peran yang dipilih
    if (peran == "Ksatria") {
      console.log(
        "Halo Ksatria " + `${nama}` + ", kamu dapat menyerang dengan senjatamu!"
      );
    } else if (peran == "Tabib") {
      console.log(
        "Halo Tabib " + `${nama}` + ", kamu akan membantu temanmu yang terluka"
      );
    } else if (peran == "Penyihir") {
      console.log(
        "Halo Penyihir " + `${nama}` + ", ciptakan keajaiban yang membantu kemenanganmu!"
      );
      // Jika Peran yang dipilih tidak ada di dalam opsi
    } else {
      console.log(
        "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
      );
    }
  }
}

// ========================= CODE =========================

/*
========================= TEST CASES =========================
1. nama = "", peran = "" -> BERHASIL (output: nama wajib diisi)
2. nama = "Imo", peran = "Ksatria" -> BERHASIL (output: Halo Ksatria Imo, kamu dapat menyerang dengan senjatamu!)
3. nama = "Imo", peran = "Manusia" -> BERHASIL (output: Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada)
========================= TEST CASES =========================
*/