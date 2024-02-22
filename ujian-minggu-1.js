/*
========================= TUGAS 1 ========================= 
- Problem:
- Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
- Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
- Jika kedua angka bernilai sama, function akan me-return -1.
========================= TUGAS 1 =========================

========================= ALGORITMA =========================
1. Input 2 data (angka1, angka2)
2. Gunakan if else untuk menghasilkan nilai bool:
  1. Jika angka1 < angka2 maka return true
  2. Jika angka1 > angka2 maka return false
  4. Jika angka1 === angka2 maka return -1
========================= ALGORITMA =========================
*/

// ========================= KODE 1 =========================
console.log("Soal 1");
// Fungsi
function bandingkanAngka(angka1, angka2) {
  //code disini
  if (angka1 < angka2) {
    return true;
  } else if (angka1 > angka2) {
    return false;
  } else if (angka1 === angka2) {
    return -1;
  } else {
    return "Invalid number";
  }
}
// ========================= KODE 1 =========================

// ========================= TEST CASES =========================
console.log(bandingkanAngka(5, 8)); // true -> BERHASIL
console.log(bandingkanAngka(5, 3)); // false -> BERHASIL
console.log(bandingkanAngka(4, 4)); // -1 -> BERHASIL
console.log(bandingkanAngka(3, 3)); // -1 -> BERHASIL
console.log(bandingkanAngka(17, 2)); // false -> BERHASIL
console.log(bandingkanAngka(-4, "Hello")); // invalid number -> BERHASIL
// ========================= TEST CASES =========================

/* 
========================= TUGAS 2 =========================
- Problem:
- Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
- Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
========================= TUGAS 2 =========================

========================= ALGORITMA =========================
Algoritma:
1. Input kata
2. Melihat panjang kata
3. Mengampil kata dari belakang menjadi yang depan dengan for loop
4. OR, pakai fungsi split -> reverse -> join
========================= ALGORITMA =========================
*/

// ========================= KODE 2 =========================
console.log(`\n` + "Soal 2");

// Fungsi 1
function balikKata(kata) {
  // you can only write your code here!
  let hasil = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    hasil += kata[i];
  }
  return hasil;
}
// Fungsi 2
function balikKata2(kata) {
  return kata.split("").reverse().join("");
}

// ========================= KODE 2 =========================

// ========================= TEST CASES =========================
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH -> BERHASIL
console.log(balikKata("John Doe")); // eoD nhoJ -> BERHASIL
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I -> BERHASIL
console.log(balikKata2("Coding is my hobby")); // ybboh ym si gnidoC -> BERHASIL
console.log(balikKata2("Super")); // repuS -> BERHASIL
// ========================= TEST CASES =========================

/*
========================= TUGAS 3 =========================
- Problem:
- Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
- dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
- Contoh, jika menit adalah 63, maka function akan me-return "1:03".
========================= TUGAS 3 =========================

========================= ALGORITMA =========================
1. Mengecek apakah input valid atau tidak
2. Membagi menit dengan 60 dan hasil difungsikan dengan math.floor dan masukkan ke dalam variable jam
3. Membagi menit dengan operator % dan operan 60 agar menghasilkan sisa dan masukkan ke dalam variable menitJam
4. Jika menitJam lebih kecil dari 10 maka berikan 0 dibelakang :
5. Jika menitJam lebih besar dari return jam + menit 
========================= ALGORITMA =========================
*/

// ========================= KODE 3 =========================
console.log(`\n` + "Soal 3");
function konversiMenit(menit) {
  // you can only write your code here!
  let jam = Math.floor(menit / 60);
  let menitJam = menit % 60;

  if (menit == "") {
    return "Invalid Input";
  } else {
    if (menitJam < 10) {
      return jam + ":0" + menitJam;
    } else if (menitJam > 10) {
      return jam + ":" + menitJam;
    }
  }
}
// ========================= KODE 3 =========================

// ========================= TEST CASES =========================
console.log(konversiMenit(63)); // 1:03 -> BERHASIL
console.log(konversiMenit(124)); // 2:04 -> BERHASIL
console.log(konversiMenit(53)); // 0:53 -> BERHASIL
console.log(konversiMenit(88)); // 1:28 -> BERHASIL
console.log(konversiMenit(120)); // 2:00 -> BERHASIL
console.log(konversiMenit("")); // Invalid Input -> BERHASIL
// ========================= TEST CASES =========================

/* 
========================= TUGAS 4 =========================
- Problem:
- Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
- Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
========================= TUGAS 4 =========================
*/

// ========================= KODE 4 =========================
console.log(`\n` + "Soal 4");
function xo(str) {
  // you can only write your code here!
  for (i = 0; i < str.lengths; i++) {
    
  }
}
// ========================= KODE 4 =========================

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
