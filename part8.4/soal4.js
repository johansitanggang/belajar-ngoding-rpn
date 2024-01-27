function pasanganTerbesar(num) {
  // you can only write your code here!
  let stringNum = num.toString();
  let cekPasangan = 0;
  for (let i = 0; i < stringNum.length; i++) {
    let pasangan = stringNum[i] + stringNum[i + 1];
    pasangan > cekPasangan ? (cekPasangan = pasangan) : (cekPasangan = cekPasangan);
  }
  return cekPasangan;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
