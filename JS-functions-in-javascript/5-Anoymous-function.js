// => Anonymous function

// A function expression is similar to and has the same syntax
// as a function decleration one can define "named"
// function expression (where the name of the expression might be used in the call stack for example)
// or (anonymous) function expression.

var funExp = function (a, b) {
    return total = a + b;
}
var sum = funExp(43904, 40394);
var sum2 = funExp(54985, 5499);
console.log('the sum of two no is ' + sum);
console.log('the sum of two no is ' + sum2);
console.log(sum2 > sum);
