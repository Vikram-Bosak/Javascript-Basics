// => 1️⃣ function Definiton

// Before we use a function, we need to define it

// -> A function Definiton (also called a function declaration, or function statement) consists of the function keyword , followed by:

// the name of the function
// / A list of parametere to the function. enclosed in parentheses (..) and separated by commas
// The JavaScript statement that define the function , enclosed in  curly brackets, {..}

//  this is and example of basic sum
// var a = 10;
// var b = 20;
// var sum = a=b;
// console.log(sum);

function sum() {
    var a = 10, b = 20;
    var total = a + b;
    console.log(total);

}
sum();