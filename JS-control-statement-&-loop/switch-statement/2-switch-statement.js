
// @ts-ignore

// => 2️⃣ls switch statement
// ->Evaluates an expression , matching the expression's value to a case clause, and executes statemtnts statment s assciated with that case

// 1st without break statment
// find the Area?

// => this is an example of switch statement from  if else statement

var area = "cube";
var PI = 3.142, l = 5, b = 4, r = 3;

if (area == "circle") {
    console.log("The area of the circle is : " + PI * r ** 2);

} else if (area == "triangle") {
    console.log("The area of the triangel is : " + (l * b) / 2);
} else if (area == "rectangle") {
    console.log("The area of the ractangle is : " + (l * b));
} else {
    console.log('please enter valid data');

}

// => this is real example of switch statement from switch statement

var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
    case "triangle":
        console.log("The area of the triangle is : " + (l * b) / 2);

    case "circle":
        console.log("The area of the circle is : " + PI * r ** 2);

    case "ractangle":
        console.log("The area of the ractangle is : " + (l * b));

    default:
        console.log('please enter valid data');
}

// 😃 break
// => Terminate the current loop, switch, or label
// statement and transfer
// -> program contraol to the statement following the terminated  SVGPatternElement.

var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
    case "triangle":
        console.log("The area of the triangle is : " + (l * b) / 2);
        break;
    case "circle":
        console.log("The area of the circle is : " + PI * r ** 2);
        break;
    case "ractangle":
        console.log("The area of the ractangle is : " + (l * b));
        break;
    default:
        console.log('please enter valid data');
}
