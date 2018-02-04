"use strict"

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = "Allowed";
// } else {
//   accessAllowed = "Get out!";
// }

// alert(accessAllowed);

// let accessAllowed = (age > 18) ? true : false;



// uchwyty do węzłów = handlers to nodes = referencje
const formContent = document.getElementById("form1");
const userData = document.getElementsByName("user_name")[0];

formContent.addEventListener("submit", function (evt) {
  // console.log($(evt.target).serialize());

  evt.preventDefault(); //poczytac prosze o tym

  localStorage.setItem(userData.value, JSON.stringify($(formContent).serializeArray()));
});

// jakas funkcja do testowania testowania

function sumIt(a, b, c) {
  let result = a + b + c;
  return result;
}

console.log(sumIt(1, 2, 3));
