// cara membuat variabel
var a = "a";
var b = "b";
const c = "c";

// variabel dapat menampung tipe data string(text), integer(number), boolean, array, object

let nama = "ucup"; //string
let umur = 10; // number
let apakahBenar = true; //boolean
let uang = 1000; // integer

// operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

// bisa juga spt ini, di-assign ke variabel baru
let hasilOperasiAritmatika = angka1 + angka2;
console.log(hasilOperasiAritmatika); //30

hasilOperasiAritmatika = angka1 - angka2;
console.log(hasilOperasiAritmatika); // -10

hasilOperasiAritmatika = angka1 * angka2;
console.log(hasilOperasiAritmatika); // 200

hasilOperasiAritmatika = angka1 / angka2;
console.log(hasilOperasiAritmatika); //0.5

hasilOperasiAritmatika = angka1 % angka2;
console.log(hasilOperasiAritmatika); // 10

// string bisa ditambah, tapi ga bisa dikurang dengan operator aritmatika
let firstName = "ucup";
let lastName = "gege";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(firstName - lastName); //NaN

// alur pembacaan code -> dari kiri ke kanan, dan atas ke bawah
// contoh;

let number = 100;
console.log(number + 10); // 110

number = 10;
console.log(number + 10); // 20

// true = 1, false = 0
// contoh;

number = true;
console.log(number + 10); // 11
console.log(number - 10); // -9

number = false;
console.log(number + 10); // 10
console.log(number - 10); // -10
