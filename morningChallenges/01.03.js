/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 15;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') 
: (FB % 3 === 0) ? console.log('Fizz') 
: (FB % 5 === 0) ? console.log('Buzz') 
: console.log("This number isn't divisible by 5 or 3!");