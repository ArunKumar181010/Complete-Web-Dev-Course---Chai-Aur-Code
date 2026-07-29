function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let mycar = new Car("Toyota", "SUPRA");
// console.log(mycar);

let myNewcar = new Car("BMW", "M4");
// console.log(myNewcar)

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("use NEW");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
