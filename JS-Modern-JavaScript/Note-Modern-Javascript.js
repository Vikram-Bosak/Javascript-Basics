

// =>  Now it's time for modern javascript 🥰🤚

// 😍 Features of ECMAScript 2015 also know as ES6

// 1️⃣ let vs  cosnt vs var


// var myName = "vikram kumar bosak";
// console.log(myName);
// myName = "vikram bosak";
// console.log(myName);

// let myName = "vikram kumar bosak";
// console.log(myName);
// myName = "vikram bosak";
// console.log(myName);

// const myName = "vikram kumar bosak";
// console.log(myName);
// myName = "vikram bosak";
// console.log(myName);          //- can't change valuse if use a const

function biodata() {
    const myFirstName = ("vikram");
    console.log(myFirstName);


    if (true) {
        const myLastName = ("Bosak");
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);

    }
    //  console.log('innerouter' + myLastName);  //-> we can't use out side from the block


}
biodata();
// var  => function scop
// let and const => block scope




// => 2️⃣ Template literals (template setting )

// javascript program to print table for given number (8)?

// output : 8*1=8
