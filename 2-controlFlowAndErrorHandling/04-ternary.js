// act as a shortcut for writing if/else or switch statements

let num = 6;

// ternary
(num > 0) ? console.log('Yes is it') : console.log('Not it isn\'t');
//(1)    (2)                        (3)

/*
    1. params act as our if. checks if the statement evaluates as true
    2. if statement is true, run what's after the question mark
    3. colon acts as our 'else' or catch all statement
*/

if (num > 0) {
    console.log('Yes it is')
} else {
    console.log("No it isn't")
};

let num = 6;

(num == 0) ? console.log('Hello') : (num < 0 ) ? console.log('hi') : console.log('goodbye');

// CHALLENGE

let age = 26;

(age >= 25) ? console.log('Yay! You can rent a car!')
    : (age >= 21) ? console.log('Yay! You can drink!') 
    : (age >= 18) ? console.log('Yay! You can vote!') 
    : console.log('Sorry, you\'re too young to do anything.');