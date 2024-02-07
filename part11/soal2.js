/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  splitString = str.split(",");
  let resultArray = [];
  let rangedHero = [];
  let meleeHero = [];
  if (str.length === 0) {
    return [];
  } else {
    let heroName = "";
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i].endsWith("Ranged")) {
        heroName = splitString[i].split("-")[0];
        rangedHero.push(heroName);
      }
      if (splitString[i].endsWith("Melee")) {
        heroName = splitString[i].split("-")[0];
        meleeHero.push(heroName);
      }
    }
  }
  resultArray.push(rangedHero, meleeHero);
  return resultArray;
}

// TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
