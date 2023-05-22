//TASK 1

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );


let result = `
let a = 3;
let b = 5;
let c;
------------
a + b = ${a + b} \na - b = ${a - b} \na * b = ${a * b}\na / b = ${a / b}\na % b = ${a % b}\na += b = ${a += b}\na -= b = ${a -= b}\na *= b = ${a *= b}\na /= b = ${a /= b}\na %= b = ${a %= b}\na == b = ${a == b}\na != b = ${a != b}\na > b =  ${a > b}\na < b = ${a < b}\n!a && !c = ${!a && !c}\n!a || !c = ${!a || !c}
`;

alert(result);



// let a = 3;
// let b = 5;
// let c;

// a - b = ${a - b}


/*
a + b
a - b

a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/



//Declare the variable first_name and assign it with the value of your first name;
let first_name = "Joy";

//Declare the variable last_name and assign it with the value of your last name;
let last_name = "Fidelis Ugbong";

//Declare the variable email and assign it with the value of your email;
let email = "fide0006@algonquinlive.com";

//Declare the variable output;
let output;

//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
//Assign output with gotten expression;

output = "My name is " + first_name + " " + last_name + "." + " You can contact me at " + email + "."

console.log(output);


//Alert output.
alert(output);
