// ========== SOAL 1 START ==========

// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA (MAJU");
let increment1 = 0;
while (increment1 <= 5) {
  console.log(increment1);
  increment1++;
}

console.log("\n");
console.log("LOOPING KEDUA (MUNDUR)");

let decrement1 = 5;
while (decrement1 >= 0) {
  console.log(decrement1);
  decrement1--;
}

// ========== SOAL 1 END ==========

// ========== SOAL 2 START ==========

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA (MAJU");
let increment2 = 5;

for (let i = 0; i <= increment2; i++) {
  console.log(i);
}

console.log("\n");
console.log("LOOPING KEDUA (MUNDUR)");

let decrement2 = 5;
for (let i = decrement2; i >= 0; i--) {
  console.log(i);
}

// ========== SOAL 2 END ==========

// ========== SOAL 3 START ==========

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`angka ${i}, GENAP`);
  } else {
    console.log(`angka ${i}, GANJIL`);
  }
}

// ========== SOAL 3 END ==========

// ========== SOAL 4 START ==========

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// kelipatan 3
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`angka ${i} kelipatan 3`);
  } else {
    console.log(`angka ${i} BUKAN kelipatan 3`);
  }
}

// kelipatan 6
for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`angka ${i} kelipatan 6`);
  } else {
    console.log(`angka ${i} BUKAN kelipatan 6`);
  }
}

// // kelipatan 10
for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`angka ${i} kelipatan 10`);
  } else {
    console.log(`angka ${i} BUKAN kelipatan 10`);
  }
}

// ========== SOAL 4 END ==========

// ========== SOAL 5 START ==========

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
// hasilnya
//*
//**
//***
//****
//*****

let stars = "";
for (let row = 0; row < 5; row++) {
  for (let star = 0; star <= row; star++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);

// ========== SOAL 5 END ==========
