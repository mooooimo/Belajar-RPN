/* 
========================= TUGAS 1 =========================
1. Melakukan Looping Menggunakan While
- Problem:
- Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
- Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
- Menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
- Tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
========================= TUGAS 1 =========================
*/

// ========================= KODE 1 =========================
let i = 0;

console.log("Soal 1" + `\n` + "Looping Pertama: ");
while (i < 5) {
  console.log(i); // 0,1,2,3,4 < 5
  i++;
}

console.log("" + `\n` + "Looping Kedua: ");
while (i > 0) {
  console.log(i); // 5,4,3,2,1 > 0
  i--;
}
// ========================= KODE 1 =========================

/*
========================= TUGAS 2 =========================
2. Melakukan Looping Menggunakan For
- Problem:
- Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
- Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
- menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
- tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
========================= TUGAS 2 =========================
*/

// ========================= KODE 2 =========================
console.log("" + `\n` + "Soal 2" + `\n` + "Looping Pertama: ");
for (i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4 < 5
}

console.log("" + `\n` + "Looping Kedua: ");
for (i = 5; i > 0; i--) {
  console.log(i); // 5,4,3,2,1 > 0
}
// ========================= KODE 2 =========================

/*
========================= TUGAS 3 =========================
3. Angka Ganjil dan Genap
- Hint: kamu akan menggunakan kondisional juga di kasus ini.
- Problem:
- Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
- Di dalam perulangan, periksa setiap angka counter:
- Apabila angka counter adalah angka genap, tuliskan GENAP
- Apabila angka counter adalah angka ganjil, tuliskan GANJIL
========================= TUGAS 3 =========================
*/

// ========================= KODE 3 =========================
let angka = 9;

console.log(`\n` + "Soal Ketiga");
if (angka % 2 == 0) {
  for (counter = 2; counter <= 100; counter += 2) {
    console.log(counter); //bilangan genap 1-100
  }
  // Mengecek apakah counter genap
  if (counter % 2 == 0) {
    console.log("Genap");
  }
} else if (angka % 2 != 0) {
  for (counter = 1; counter <= 100; counter += 2) {
    console.log(counter); //bilangan ganjil 1-100
  }
  // Mengecek apakah counter ganjil
  if (counter % 2 != 0) {
    console.log("Ganjil");
  }
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

/*
========================= TUGAS 5 =========================
5. Bintang asteriks
- Problem buatlah bintang seperti berikut:
- let input = 5
- hasilnya
*
**
***
****
*****
========================= TUGAS 5 =========================
*/

// ========================= KODE 5 =========================
let input = 5,
  bintang = "*";

for (k = 0; k < 5; k++) {
  for (l = 0; k < 5 - 1; k++) {
    console.log("");
  }
  console.log(bintang);
}
