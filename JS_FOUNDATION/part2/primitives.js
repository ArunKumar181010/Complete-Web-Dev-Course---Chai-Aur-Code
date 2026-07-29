//Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());
// console.log(typeof balance);
// console.log(typeof anotherBalance);

//booelean
let isActive = true;
let isReallyAcive = new Boolean(true); //not recommended to use

// null and  undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname); //undefined
// console.log(lastname);

//string

let myString = "Hello";
let myStringOne = "Hola";
let username = "Arun";

let oldGreet = myString + " " + "Arun";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(greetMessage);
// console.log(demoOne);

let sm1 = Symbol("Arun")
let sm2 = Symbol("Arun");

console.log(sm1 == sm2); 