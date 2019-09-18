// arrow functions ( or fat arrow function) were introduced in ES6. They are a more concise way to write
//function expressions - NOT function declarations
    //That means that arrow funcitons DO NOT get hoisted


// BLOCK BODY ARROW FUNCTION
let hi = () => {
    console.log('hi');
    // return; --- block body functions must have a return in the body of the function
}

hi();



// CONCISE BODY ARROW FUNCTION
let hi = () => console.log('hi');
    // concise body arrow functions returns by default
hi();



// CONCISE VS BLOCK
let apples = (x) => console.log(`There are ${x} apples.`);

apples(15);

let apples = x => {
    console.log(`There are ${x} apples.`)
}

apples(10)
// single parameters do not need to be wrapped in parenthese, but multiple parameters need to be