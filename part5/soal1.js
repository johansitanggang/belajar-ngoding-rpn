// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// 1) buat 2 variabel, peran & nama
// 2) buat pengkondisian dan output jika nama/peran kosong
// 3) buat pengkondisian dan output berdasarkan isi variabel nama & peran

let nama = "s",
  peran = "jokw";

//code disini gunakan console.log untuk outputnya
if (nama == "") {
  console.log("nama wajib diisi");
} else if (peran == "") {
  console.log("Pilih Peranmu untuk memulai game");
} else if (peran == "Ksatria") {
  console.log(`halo ${peran} ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`halo ${peran} ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(`halo ${peran} ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}
