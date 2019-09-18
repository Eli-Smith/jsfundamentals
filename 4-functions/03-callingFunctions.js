function hi() {
    console.log('HI');
    //return 'hi'
}

hi; // Nothing happens, no variable named 'hi' has been declared.
hi(); // HI
console.log(hi); // [function: hi]
console.log(hi());

/*
    - the parentheses after a function IMMEDIATELY invoke the function that's being invoked
    - we get undefined because we are not returning any information or data from our function
*/

//CHALLENGE: Create a function that, when invoked, lists the numbers 1-10

listNumbers(); // can invoke the funtcion 'listNumbers' before the function is written, because function declarations are hoisted

function listNumbers() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}


//CHALLENGE

let arr = ['This', 'is', 'really', 'cool'];

function values() {
    for (let str of arr){
        console.log(str);
    }
};

values();