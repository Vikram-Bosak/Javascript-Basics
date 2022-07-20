// => 6️⃣ fat Arror function

// Normal way of writin function

// console.log(sum());

// function sum() {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `the sum of the number is ${sum}`;
// }


// => How ot convert in into Fat Arrow function

// const sum = () => {
// let a = 5; b = 6;
// let sum = a + b;
// // return `the sum of the two number is ${sum}`;

// return `the sum of the two number is ${a = 5m
// }`;
// }

// console.log(sum());

const sum = () => `The sum of the two number is ${(a=5) + (b=10)}`;

console.log(sum());
