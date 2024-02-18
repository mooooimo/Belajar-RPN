/* 
========================= TUGAS 1 =========================
Tugas 1
Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
yang kemudian akan ditampilkan di console.
========================= TUGAS 1 =========================
*/

// ========================= KODE 1 =========================

console.log("Soal 1");

let jeneng = "x";
// bikin fungsinya disini
function shoutOut() {
  return "Halo Function";
}

// Sekalian latihan fungsi arrow
const newLocal = () => console.log("Halo Function " + `${jeneng}`);
const shoutOut2 = newLocal;
// ------------------------------------
console.log(shoutOut());
console.log(shoutOut2(jeneng)); //undefined
// ------------------------------------
// Catatan:
console.log(undefined === 0); //False
console.log(undefined === null); //false
// console.log(undefined === Nan); //Error
// ========================= KODE 1 =========================

/*
========================= TUGAS 2 =========================
Tugas 2
- Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
- dua parameter yang dikirim.
========================= TUGAS 2 =========================
*/

// ========================= KODE 2 =========================
console.log(`\n` + "Soal 2");
// Variable
let num1 = 1,
  num2 = 2;

// bikin fungsinya disini
function calculateMultiply(x, y) {
  return x * y;
}

// bikin fungsi arrow
const calculateMultiply2 = (x, y) => x * y;

let hasilPerkalian = calculateMultiply(num1, num2);
let hasilPerkalian2 = calculateMultiply2(num1, num2);
// ------------------------------------
console.log(hasilPerkalian);
console.log(hasilPerkalian2);
// -----------------------------------
// ========================= KODE 1 =========================

/*
========================= TUGAS 3 =========================
Tugas 3
- Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
- satu kalimat berikut:
- "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
========================= TUGAS 3 =========================
*/

// ========================= KODE 3 =========================
console.log(`\n` + "Soal 3");
// Variable
let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

//bikin fungsinya disini
function processSentence(a, b, c, d) {
  return (
    "Nama saya " +
    `${nama}` +
    ", umur saya " +
    `${age}` +
    " tahun, alamat saya di " +
    `${address}` +
    ", dan saya punya hobby yaitu " +
    `${hobby}` +
    "!"
  );
}

let fullSentence = processSentence(nama, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
// ========================= KODE 3 =========================
