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


