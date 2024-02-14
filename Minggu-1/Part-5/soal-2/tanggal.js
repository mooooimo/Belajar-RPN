/* 
========================= TUGAS =========================
- Kamu akan diberikan sebuah tanggal dalam tiga variabel, 
- Yaitu hari, bulan, dan tahun. 
- Disini kamu diminta untuk membuat format tanggal. 
- Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
- Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
========================= TUGAS =========================

========================= TIPS =========================
- Gunakan switch case untuk kasus ini!
- Contoh:
- let hari = 21; let bulan = 1; let tahun = 1945;
- Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
- Tips gunakan keyword ini di google "conditional switch case javascript"
- Dan mulailah membaca dan mencontek di stackoverflow xixixi
========================= TIPS =========================

========================= ALGORITMA =========================
1. Menyiapkan let variable tanggal, bulan. tahun, dan namaBulan
2. Mengecek apakah variable tanggal kosong atau tidak
3. Jika kosong berikan peringatan "Tanggal wajib diisi"
4. Apakah tanggal lebih kecil dari 1 dan lebih besar dari 31
5. Jika iya, berikan peringatan "Tanggal tidak valid"
4. Mengecek apakah variable bulan kosong atau tidak
5. Jika kosong berikan peringatan "Bulan wajib diisi"
6. Apakah bulan lebih besar dari 12
7. Jika iya, berikan peringatan "Bulan tidak valid"
8. Jika bulan tidak leib besar dari 12, ubahlah nilai variable namaBulan menyesuaikan switch case
9. Mengecek variable tahun kosong atau tidak
10. Jika kosong, berikan peringatan "Tahun tidak valid"
========================= ALGORTIMA =========================
*/

// ========================= CODE =========================

let tanggal = 4; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2007; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let namaBulan = "";

//code switch case kamu disini

// Mengecek tanggal
if (tanggal == "") {
  console.log("Tanggal wajib diisi");
} else if (tanggal >= 1 && tanggal <= 31) {
  // Mengecek bulan
  if (bulan == "") {
    console.log("Bulan wajib diisi");
  }
  // Mencari bulan
  else if (bulan <= 12) {
    switch (bulan) {
      case 1:
        namaBulan = "Januari";
        break;
      case 2:
        namaBulan = "Februari";
        break;
      case 3:
        namaBulan = "Maret";
        break;
      case 4:
        namaBulan = "April";
        break;
      case 5:
        namaBulan = "Mei";
        break;
      case 6:
        namaBulan = "Juni";
        break;
      case 7:
        namaBulan = "Juli";
        break;
      case 8:
        namaBulan = "Agustus";
        break;
      case 9:
        namaBulan = "September";
        break;
      case 10:
        namaBulan = "Oktober";
        break;
      case 11:
        namaBulan = "November";
        break;
      case 12:
        namaBulan = "Desember";
    }
    // Mengecek tahun
    if (tahun == "") {
      console.log("Tahun wajib diisi");
    }
    // Output
    else if (tahun >= 1900 && tahun <= 2200) {
      console.log(`${tanggal} ` + `${namaBulan} ` + `${tahun}`);
    } else {
      console.log("Tahun tidak valid");
    }
  } else {
    console.log("Bulan tidak valid");
  }
} else {
  console.log("Tanggal tidak valid");
}

// ========================= CODE =========================

/* 
========================= TEST CASES =========================
1. tanggal = "", bulan = 11, tahun = 1996, namaBulan = "" -> BERHASIL (output: Tanggal wajib diisi)
2. tanggal = 4, bulan = 200, tahun = 2003, namaBulan = "" -> BERHASIL (output: Bulan tidak valid)
3. tanggal = 5, bulan = 1, tahun = 2009, namaBulan = "" -> BERHASIL (output: 5 Januari 2009)
========================= TEST CASES =========================
*/
