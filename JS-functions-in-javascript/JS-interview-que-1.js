// -> Que => what is the Differnence between function parameter vs function Arguments

// =>function parameter vs function Arguments
// function parameter are the names listed in the function's definition
// function Arguments are the real valuse passed to the function.

function sum(a,b){   //function parameter
    var total = a+b;
    console.log(total);

}
sum();
sum(20,40);   // function arguments
sum(59,48);



// -> Que.2 Wht function ?

// =>You can reuse the  code : Define the code oncuechange, and use it many times.
// =>you can use the same code many times with different argument,to produce differnent result


/// or

// =>A function is a group of resable code which can be called anywhere in your Program. This eleminates the need of writing the same code again and again.

// DRY => do not repeat yourself

function sum(a,b){   //function parameter
    var total = a+b;
    console.log(total);

}
sum();
sum(20,40);   // function arguments
sum(59,48);
sum(558,548);
sum(489,5348);