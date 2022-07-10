// Que-1 Difference between null vs undefined


// undefined - The undefined property indicates that a variable has not been declared at all.

// null-The value null represents the absence of any object value

// var iamuseless = null;
// console.log(iamuseless);
// console.log(typeof(iamuseless));

// 2nd javascript bug


// var iAmstandBy;
// console.log(iAmstandBy);
// console.log(typeof(iAmstandBy));



// Que-2 what is NaN? ✋

// NaN is a property of the global object in other words, it is a variable in global scope the intial value of NaN is not a Number



var myPhoneNumber  = 4339434034880;
var myName = "vikrambosak";

console.log(myPhoneNumber);
console.log(myName);


console.log(isNaN(myName));
console.log(isNaN(myPhoneNumber));

if(isNaN(myName)){
    console.log("please enter a valid number");
}



