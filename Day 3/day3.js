console.log("=== Day 3 Demo Start ===\n");

/* ---------------------------------------
 * 1) Function Declarations vs Arrow Functions
 * -------------------------------------*/

console.log("1) Function Declarations vs Arrow Functions\n");

// Function declaration
function greetDeclaration(name) {
  return "Hello, " + name;
}

// Arrow function
const greetArrow = (name) => "Hello, " + name;

// Example usage:
console.log("Function declaration:", greetDeclaration("Diana"));
console.log("Arrow function:", greetArrow("Bruce"));

// this difference demo
const user = {
  name: "AbdelSalam",
  normalFunc: function () {
    console.log("normalFunc this.name:", this.name);
  },
  arrowFunc: () => {
    console.log("arrowFunc this.name:", this.name);
  },
};

console.log("\nthis binding example:");
user.normalFunc();
user.arrowFunc();

/* ---------------------------------------
 * 2) Lexical Scope
 * -------------------------------------*/

console.log("\n2) Lexical Scope\n");

function outer() {
  const msg = "Hello from outer scope";

  function inner() {
    console.log("inner sees:", msg);
  }

  inner();
}

outer();
function createInner() {
  const secret = "I am secret inside createInner";

  function inner() {
    console.log("inner still sees secret:", secret);
  }

  return inner;
}

const innerFn = createInner();
innerFn();

/* ---------------------------------------
 * 3) Closures Basics
 * -------------------------------------*/

console.log("\n3) Closures\n");

// Simple counter closure
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counterA = makeCounter();
console.log("counterA:", counterA());
console.log("counterA:", counterA());
console.log("counterA:", counterA());

const counterB = makeCounter();
console.log("counterB (new one):", counterB());

/* ---------------------------------------
 * 4) Hands-on: counter(), once(), memoize()
 * -------------------------------------*/

console.log("\n4) Hands-on: counter(), once(), memoize()\n");

// 4.1 counter()
function counter() {
  let value = 0;

  return {
    inc: () => ++value,
    dec: () => --value,
    get: () => value,
  };
}

console.log("counter() demo:");
const c = counter();
console.log("inc:", c.inc());
console.log("inc:", c.inc());
console.log("dec:", c.dec());
console.log("get:", c.get()); 

// 4.2 once()
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

console.log("\nonce() demo:");
const init = once(() => {
  console.log("init logic runs only once");
  return 42;
});

console.log("init result 1:", init());
console.log("init result 2:", init());
console.log("init result 3:", init()); 

// 4.3 memoize()
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("from cache for key:", key);
      return cache[key];
    }
    console.log("calculating for key:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

console.log("\nmemoize() demo:");

const slowSquare = (n) => {
  console.log("slowSquare is running...");
  return n * n;
};

const fastSquare = memoize(slowSquare);

console.log("fastSquare(5):", fastSquare(5));
console.log("fastSquare(5):", fastSquare(5));
console.log("fastSquare(6):", fastSquare(6));

/* ---------------------------------------
 * 5) Extra closure example: makePrefix
 * -------------------------------------*/

console.log("\n5) Extra closure example: makePrefix\n");

function makePrefix(prefix) {
  return function (name) {
    return prefix + ", " + name;
  };
}

const sayHello = makePrefix("Hello");
const sayBye = makePrefix("Goodbye");

console.log(sayHello("Barry"));
console.log(sayBye("Clark"));


