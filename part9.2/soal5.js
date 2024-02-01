//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let newWord = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < alphabetString.length; j++) {
      if (kata[i] === alphabetString[j]) {
        newWord += alphabetString[j + 1];
      }
    }
  }
  return newWord;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
