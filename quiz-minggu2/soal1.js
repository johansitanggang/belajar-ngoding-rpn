// /*
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// */
// function targetTerdekat(arr) {
//   // you can only write your code here!
//   let indexO = [];
//   let indexX = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "o") {
//       indexO.push(i);
//     } else if (arr[i] == "x") {
//       indexX.push(i);
//     }
//   }
//   if (indexX.length === 0) {
//     return 0;
//   } else {
//     let jarakTerdekat = 1;
//     for (let i = 0; i < indexO.length; i++) {
//       for (let j = 0; j < indexX.length; j++) {
//         if (jarakTerdekat == 1) {
//           jarakTerdekat = Math.abs(indexO[i] - indexX[j]);
//         }
//         if (Math.abs(indexO[i] - indexX[j]) < jarakTerdekat) {
//           jarakTerdekat = Math.abs(indexO[i] - indexX[j]);
//         }
//       }
//     }
//     return jarakTerdekat;
//   }
// }

// // TEST CASES
// console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
// console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
// console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
// console.log(targetTerdekat([" ", " ", "o", " "])); // 0
// console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
function targetTerdekat(arr) {
  // you can only write your code here!

  let indexO = -1;
  let indexX = -1;
  let cekBiggest = 100000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      indexO = i;
    }
    if (arr[i] === "x") {
      indexX = i;
    }

    if (indexO > -1 && indexX > -1) {
      if (cekBiggest > Math.abs(indexO - indexX)) {
        cekBiggest = Math.abs(indexO - indexX);
      }
    }
  }

  if (indexO < 0 || indexX < 0) {
    return 0;
  } else {
    return cekBiggest;
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", " ", "x", " ", "o", " ", "x", "o"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", " ", "o", "x", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
