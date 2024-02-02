/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  let resultArrayOfObject = [];
  if (arrPenumpang.length === 0) {
    return resultArrayOfObject;
  } else {
    for (let i = 0; i < arrPenumpang.length; i++) {
      let newObj = {};
      newObj.penumpang = arrPenumpang[i][0];
      newObj.naikDari = arrPenumpang[i][1];
      newObj.tujuan = arrPenumpang[i][2];
      newObj.bayar = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000;
      resultArrayOfObject.push(newObj);
    }
    return resultArrayOfObject;
  }
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
