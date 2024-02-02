function countAge(num) {
  return num !== undefined ? 2024 - num : "Invalid Birth Year";
}

function changeMe(arr) {
  // you can only write your code here!

  if (arr.length === 0) {
    console.log("");
  }
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newObject = {};
    let fullName = arr[i][0] + " " + arr[i][1];
    newObject[fullName] = {};
    newObject[fullName].firtName = arr[i][0];
    newObject[fullName].lastName = arr[i][1];
    newObject[fullName].gender = arr[i][2];
    newObject[fullName].age = countAge(arr[i][3]);
    resultArr.push(newObject);
  }
  console.log(resultArr);
}

// TEST CASES

changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
