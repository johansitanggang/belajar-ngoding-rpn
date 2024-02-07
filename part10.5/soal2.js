/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/

function changeVocals(str) {
  //code di sini
  let newString = "";
  let arrVocals = ["a", "i", "u", "e", "o"];
  for (let i = 0; i < str.length; i++) {
    if (arrVocals.indexOf(str[i].toLowerCase()) !== -1) {
      newString += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      newString += str[i];
    }
  }
  return newString;
}

function reverseWord(str) {
  //code di sini
  let changedVocals = changeVocals(str);
  let reversedWord = changedVocals.split("").reverse().join("");
  return reversedWord;
}

function setLowerUpperCase(str) {
  //code di sini
  let reversedWord = reverseWord(str);
  let newWord = "";
  for (let i = 0; i < reversedWord.length; i++) {
    reversedWord[i].toLowerCase() === reversedWord[i] ? (newWord += reversedWord[i].toUpperCase()) : (newWord += reversedWord[i].toLowerCase());
  }
  return newWord;
}

function removeSpaces(str) {
  //code di sini
  return setLowerUpperCase(str).split(" ").join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  let changeVocalsWord = removeSpaces(name);
  return changeVocalsWord;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
