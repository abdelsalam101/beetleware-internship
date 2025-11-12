/*
 *I will use IIFEs (Immediately Invoked Function Expressions) in this demo file
*/

/* -------------------------------------------
 * 1) Control Flow
 * -----------------------------------------*/
console.log("1) Control Flow");

// 1.1 if / else if / else
(function demoIfElse() {
  const score = 85;
  let grade;
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else grade = "C or below";
  console.log("if/else grade:", grade); // expected: B
})();

// 1.2 switch
(function demoSwitch() {
  const day = "Mon";
  let msg;
  switch (day) {
    case "Mon":
      msg = "Start of the week";
      break;
    case "Fri":
      msg = "Weekend is near";
      break;
    default:
      msg = "Midweek";
  }
  console.log("switch:", msg);
})();

// 1.3 for loop
(function demoFor() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(i * 2);
    }
    console.log("for loop:", arr);
})();

// 1.4 while loop
(function demoWhile() {
    let count = 0;
    let arr = [];
    while (count < 5) {
      arr.push(count);
      count++;
    }
    console.log("while loop:", arr);
})();

// 1.5 do...while loop
(function demoDoWhile() {
    let count = 5;
    let arr = [];
    do {
      arr.push(count);
      count--;
    } while (count > 0);
    console.log("do...while loop:", arr);
})();

// 1.6 for...of loop
(function demoForOf() {
    const cars = ['bmw', 'ferrari', 'aston martin'];
    let carList =[];
    for (const item of cars) {
      carList.push(item);
    }
    console.log("for...of loop:", carList.join(' - '));
})();

// 1.7 for...in loop
(function demoForIn() {
    const obj = {x: 10, y: 20, z: 30};
    for (const key in obj) {
      console.log(key, obj[key]);
    }
})();

/* -------------------------------------------
 * 2) Arrays & Core Methods
 * -----------------------------------------*/
console.log("2) Arrays & Core Methods");

// 2.1 map
(function demoMap() {
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(num => num * num);
    console.log("map:", squared);
})();

// 2.2 filter
(function demoFilter() {
    const numbers = [10, 20, 30, 40, 50];
    const above20 = numbers.filter(num => num > 20);
    console.log("filter:", above20);
})();

// 2.3 reduce
(function demoReduce() {
    const numbers = [10, 20, 30, 40];
    const total = numbers.reduce((acc, num) => acc + num, 0);
    console.log("reduce:", total);
})();

// 2.4 some
(function demoSome() {
    const numbers = [5, 10, 15, 20];
    const hasAbove15 = numbers.some(num => num > 15);
    console.log("some:", hasAbove15);
})();

// 2.5 every
(function demoEvery() {
    const ages = [15, 44, 10, 8];
    const allAdults = ages.every(num => num >= 18);
    console.log("every:", allAdults);
})();

// 2.6 find
(function demoFind() {
    const users = [ {id: 1, name: 'Bruce'}, 
                    {id: 2, name: 'Clark'}, 
                    {id: 3, name: 'Diana'} ];
    const user = users.find(u => u.id === 2);
    console.log("find:", user);
})();

// 2.7 flat
(function demoFlat() {
    const arr = [1, 2, [3, 4, [5, 6]]];
    const flatArr = arr.flat(2);
    console.log("flat:", flatArr);
})();

/* -------------------------------------------
 * 3) Objects, Spread, Destructuring, ?. and ??
 * -----------------------------------------*/
console.log("3) Objects, Spread, Destructuring, ?. and ??");

// 3.1 create & access
(function demoObjects() {
  const person = { name: "Alexander", age: 31 };
  console.log("object access:", person.name, person["age"]);
})();

// 3.2 spread operator
(function demoSpread() {
    const superHero1 = { name: "Superman", power: "Strength" };
    const superHero2 = { ...superHero1, power: "Flying" };
    console.log("spread operator:", superHero2);
})();

// 3.3 destructuring
(function demoDestructuring() {
    const rectangle = { width: 20, height: 10 };
    const { width, height } = rectangle;
    console.log("destructuring:", width, height);
})();

// 3.4 optional chaining (?.)
(function demoOptionalChaining() {
    const user = { profile: { name: "Diana" } };
    console.log("optional chaining:", user.profile?.name);
    console.log("optional chaining (non-existent):", user.address?.city);
})();

// 3.5 nullish coalescing (??)
(function demoNullishCoalescing() {
    const user = { profile: { name: "Diana" } };
    console.log("nullish coalescing:", user.profile?.name ?? "Unknown");
    console.log("nullish coalescing (non-existent):", user.address?.city ?? "Unknown");
})();

/* -------------------------------------------
 * 4) Safe Object Merge (deepMerge)
 * -----------------------------------------*/
console.log("4) Safe Object Merge (deepMerge)");

function deepMerge(target, source) {
    const output = { ...target };
    for (const [key, value] of Object.entries(source)) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            output[key] = deepMerge(target[key] || {}, value);
        } else {
            output[key] = value;
        }
    }
    return output;
}

(function demoDeepMerge() {
    const obj1 =  { a: 1, b: { x: 10 }, list: [150, 250] };
    const obj2 = { b: { y: 20 }, list: [300] };
    const merged = deepMerge(obj1, obj2);
    console.log("deepMerge:", merged);
})();
