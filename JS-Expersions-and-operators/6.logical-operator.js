
//! 4. Logical operators

//# logical operators are typically use with  boolean (logical) values; when they are, they return a boolean value.

var a = 30;
var b = -20;

//$ there are three types of logical operators

// #Logical AND (&&)
// $the logical  AND (&&) operators (logical conjunction) for a set of operands is ture if and only if all of its operands are true.

console. log(a > b && b > 0 && b < 0 );


//# logical OR (||)
// $the logical OR (||) operator (logical disjunction) for a  set of operands is true if and only if one more of its operands is true

console. log(a > b || b > 0 || b < 0 );

//# Logical NOT (!)
// $the logical NOT (!) operator (logical complement , negation) take truth to falsity and vice Versa,

console. log(!((a > b) && (b > 0) && (b < 0 )));
