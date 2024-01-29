/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  let sameInitial = [];
  let resultSort = [];

  for (let i = 0; i < animals.length; i++) {
    // (if) cek kalo i = 0, langsung masukin animals[i] ke sameInitial
    if (i === 0) {
      sameInitial.push(animals[i]);
    } //(else if) cek initial animals[i], klo masih sama dengan yang di array sameInitial maka masukin animals[i] nya
    else if (animals[i][0] === sameInitial[0][0]) {
      sameInitial.push(animals[i]);
    } // (else) selain dr itu artinya ya initial udah beda, jd lgsg masukin aja sameInitial ke resultSort dan isi sameInitial dengan animals[i] utk cek selanjutnya
    else {
      resultSort.push(sameInitial);
      sameInitial = [animals[i]];
    }
  }
  // (push) jgn lupa mskin sameInitial ke resultSort
  resultSort.push(sameInitial);
  return resultSort;
}
// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
