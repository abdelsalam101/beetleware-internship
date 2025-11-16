console.log("=== Day 4 Demo Start ===\n");

/* -------------------------------------------
 * 1) this binding: implicit / explicit / new
 * -----------------------------------------*/

console.log("1) this binding — implicit\n");

const user = {
  name: "AbdelSalam",
  sayName() {
    console.log("implicit this.name:", this.name);
  },
};

user.sayName();

console.log("\n1.2 Losing implicit this (for reference):");

const looseFn = user.sayName;
looseFn();


/* -------------------------------------------
 * 2) Explicit binding: call / apply / bind
 * -----------------------------------------*/

console.log("\n2) Explicit binding — call / apply / bind\n");

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const personA = { name: "Bruce" };
const personB = { name: "Clark" };

greet.call(personA, "Hello", "!");
greet.call(personB, "Hi", "!!");

// 2.2 apply: fn.apply(thisArg, [args...])
greet.apply(personA, ["Welcome", "..."]);

const greetAli = greet.bind(personA, "Hey", " :)");
greetAli();

/* -------------------------------------------
 * 3) new binding — constructor pattern
 * -----------------------------------------*/

console.log("\n3) new binding — constructor pattern\n");

function User(name, role) {
  this.name = name;
  this.role = role;
}

User.prototype.describe = function () {
  console.log(`User.describe → name: ${this.name}, role: ${this.role}`);
};

const u1 = new User("AbdelSalam", "Intern");
const u2 = new User("Mostafa", "Mentor");

u1.describe();
u2.describe();

console.log("u1.describe === u2.describe ?", u1.describe === u2.describe);


/* -------------------------------------------
 * 4) Arrow functions and lexical this
 * -----------------------------------------*/

console.log("\n4) Arrow functions and lexical this\n");

const obj = {
  label: "OBJ",
  normal() {
    console.log("normal this.label:", this.label);
  },
  arrow: () => {
    console.log("arrow this.label:", this.label);
  },
};

obj.normal();
obj.arrow();


/* -------------------------------------------
 * 5) Prototypes & prototype chain
 * -----------------------------------------*/

console.log("\n5) Prototypes & prototype chain\n");

const simple = { x: 10 };

console.log("simple.x:", simple.x);
console.log("simple.toString exists? ", typeof simple.toString === "function");
console.log(
  "simple.__proto__ === Object.prototype ?",
  Object.getPrototypeOf(simple) === Object.prototype
);


/* -------------------------------------------
 * 6) Small constructor pattern (Car)
 * -----------------------------------------*/

console.log("\n6) Constructor pattern — Car example\n");

function Car(model, year) {
  this.model = model;
  this.year = year;
}

Car.prototype.getInfo = function () {
  return `${this.model} (${this.year})`;
};

Car.prototype.honk = function () {
  console.log(this.model + " says: Beep!");
};

const car1 = new Car("Aston Martin", 2020);
const car2 = new Car("Ferrari", 2023);

console.log("car1.getInfo():", car1.getInfo());
console.log("car2.getInfo():", car2.getInfo());
car1.honk();
car2.honk();


/* -------------------------------------------
 * 7) Method borrowing with call
 * -----------------------------------------*/

console.log("\n7) Method borrowing with call\n");

const person1 = {
  name: "Bruce",
  sayName() {
    console.log("My name is " + this.name);
  },
};

const person2 = { name: "Diana" };


person1.sayName();

person1.sayName.call(person2);

function showArguments() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log("arguments as real array:", argsArray);
}

showArguments(1, 2, 3);
