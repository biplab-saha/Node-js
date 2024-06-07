// console.log(2>1);
// console.log(1<2);
// console.log(2==1);
// console.log(2>=1);
// console.log(2!=1);
// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
//console.log(undefined == 0);
// console.log("2"===2)
const id = Symbol("122");
const anotherId = Symbol("122");
console.log(id === anotherId);

const bigNumber = 45645656465456454454n;
let outsideTemp;
const heros = ["biplab", "mrinmoy"];

let myObj = {
  Name: "biplab",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3