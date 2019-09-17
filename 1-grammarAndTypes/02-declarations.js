// variables are named containers for storing data values
// we name variables so that we can refer back to them later

    let    a  =  2;
/* (1)    (2)(3)(4)

    1- variable JavaScript keyword
    2- variable name
    3- assignmnet operator
    4- variable value
*/

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but cannot come first
        - javascript is case sensitive - 'hello' and 'Hello' are different variables
        - no spaces are allowed in variable names
        - camelCase is the best practice for naming variables.
        - this is good practice because it helps keep variables readable--  let myName = 'Zach';
*/

/*
    var, let, const

    - var: 'old' keyword for variables. Won't use as often
    - let: 'new' keyword for variables. Introduced in es6
    - const: declares an unchangeable variable
*/

// Declarations: left side of the variable
// Initialization: right side of the variable

let x;
console.log('Declaration:', x); // declaration

x = 10;
console.log('Initialization:', x); // initialization

x = 33;
console.log('reinitialization:', x);

///////////////////////////////////////////////////////////////////////////////////////////

let today = 'Great';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);

elevenFifty = 'Super';
console.log(today, elevenFifty);