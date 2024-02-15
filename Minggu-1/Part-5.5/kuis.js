/*
========================= TUGAS 1 =========================
1. Let's Form a Sentence

- Problem:
- Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
- Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
- Untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
- Tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
========================= TUGAS 1 =========================
*/

// ========================= CODE 1 =========================

//  Variable
let kata = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here

// ---------------------------------------
// Menggabungkan kata per kata
console.log(
  "Soal 1" +
    `\n` +
    `${kata} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}` +
    `\n`
);
// ---------------------------------------
// ========================= CODE 1 =========================

/*
========================= TUGAS 2 =========================
2. Index Accessing - 1 by 1
- Problem:
 Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
 Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
 Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

- Hints:
 Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
 Tersebut!
========================= TUGAS 2 =========================
*/

// ========================= CODE 2 =========================

// variable
let word = "wow JavaScript is so cool";

// Memisahkan kalimat menjadi char
let exampleFirstWord = word[0] + word[1] + word[2];

let exampleSecondWord =
  word[3] +
  word[4] +
  word[5] +
  word[6] +
  word[7] +
  word[8] +
  word[9] +
  word[10] +
  word[11] +
  word[12] +
  word[13];

let exampleThirdWord = word[14] + word[15] + word[16];

let exampleFourthWord = word[17] + word[18] + word[19];

let exampleFitfthWord = word[20] + word[21] + word[22] + word[23] + word[24];

// ---------------------------------------

// Membuat char digabung menjadi sebuah kata
console.log(
  "Soal 2" +
    `\n` +
    "First Word: " +
    `${exampleFirstWord} ` +
    `\n` +
    "Second Word: " +
    `${exampleSecondWord} ` +
    `\n` +
    "Third Word: " +
    `${exampleThirdWord} ` +
    `\n` +
    "Fourth Word: " +
    `${exampleFourthWord} ` +
    `\n` +
    "Fifth Word: " +
    `${exampleFitfthWord} `
);

// Penggabungan char menjadi kalimat utuh
console.log(
  "Penggabungan: " +
    `${exampleFirstWord} ${exampleSecondWord} ${exampleThirdWord} ${exampleFourthWord} ${exampleFitfthWord}` +
    `\n`
);
// ---------------------------------------
// ========================= CODE 2 =========================

/*
========================= TUGAS 3 =========================
3. Breaking Sentence (Again) using Substring
- Problem:
- Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
========================= TUGAS 3 =========================
*/

// ========================= CODE 3 =========================
// Membuat variable untuk kalimat
let word3 = "wow JavaScript is so cool";

// Membuat variable perkata
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFitfthWord3 = word3.substring(21, 25);

// ---------------------------------------
// Memecah menjadi perkata
console.log(
  "Soal 3" +
    `\n` +
    "First Word: " +
    exampleFirstWord3 +
    `\n` +
    "Second Word: " +
    exampleSecondWord3 +
    `\n` +
    "Third Word: " +
    exampleThirdWord3 +
    `\n` +
    "Fourth Word: " +
    exampleFourthWord3 +
    `\n` +
    "Fifth Word: " +
    exampleFitfthWord3
);

// Menggabungkan menjadi kalimat
console.log(
  "Penggabungan: " +
    `${exampleFirstWord3} ${exampleSecondWord3} ${exampleThirdWord3} ${exampleFourthWord3} ${exampleFitfthWord3}` +
    `\n`
);
// ---------------------------------------
// ========================= CODE 3 =========================

/*
========================= TUGAS 4 =========================
4. Breaking Sentence (yet Again) and Count Each Length
- Problem:
Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
========================= TUGAS 4 =========================
*/
// ========================= CODE 4 =========================
// Membuat variable untuk kalimat
let word4 = "wow JavaScript is so cool";

// Mengubah kalimat menjadi kata
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFitfthWord4 = word4.substring(21, 25);

// Melihat panjang kata
let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFitfthWord4.length;

//Output data dengan length
console.log(
  "Soal 4" +
    `\n` +
    "First Word: " +
    exampleFirstWord4 +
    ", with length: " +
    firstWordLength +
    `\n` +
    "Second Word: " +
    exampleSecondWord4 +
    ", with length: " +
    secondWordLength +
    `\n` +
    "Third Word: " +
    exampleThirdWord4 +
    ", with length: " +
    thirdWordLength +
    `\n` +
    "Fourth Word: " +
    exampleFourthWord4 +
    ", with length: " +
    fourthWordLength +
    `\n` +
    "Fifth Word: " +
    exampleFitfthWord4 +
    ", with length: " +
    fifthWordLength +
    `\n`
);
// ========================= CODE 4 =========================
