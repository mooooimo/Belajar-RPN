/*
========================= TUGAS 1 ========================= 
- Problem:
- Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
- Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
- Jika kedua angka bernilai sama, function akan me-return -1.
========================= TUGAS 1 =========================
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
  } else {
    return -1;
  }
}
// ========================= KODE 1 =========================

// ========================= TEST CASES =========================
console.log(bandingkanAngka(5, 8)); // true -> BERHASIL
console.log(bandingkanAngka(5, 3)); // false -> BERHASIL
console.log(bandingkanAngka(4, 4)); // -1 -> BERHASIL
console.log(bandingkanAngka(3, 3)); // -1 -> BERHASIL
console.log(bandingkanAngka(17, 2)); // false -> BERHASIL
// ========================= TEST CASES =========================

/* 
========================= TUGAS 2 =========================
- Problem:
- Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
- Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
========================= TUGAS 2 =========================
*/

// ========================= KODE 2 =========================
console.log(`\n` + "Soal 2");
// Fungsi
function balikKata(kata) {
  // you can only write your code here!
  let panjang = kata.length;
  let hasil = "";
  for (i = 0; i > panjang - 1; i++) {
    hasil -= panjang - 1;
  }
}
// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// ------------------------------------
console.log("");
// ------------------------------------
