let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);

  let date = input[3].split("/");
  if (date[1] === "05") {
    console.log("Mei");
  }

  date.splice(0, 3, "1989", "21", "05");
  console.log(date);

  console.log(input[3].split("/").join("-"));

  console.log(input[1].slice(0, 14));
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
