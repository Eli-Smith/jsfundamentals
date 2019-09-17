// BOOLEAN: has two possible values of either true or false

let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL: null is an empty value. Think of it as an container. Nothing is in it, but it can be filled later

let empty = null;
console.log(empty);

// UNDEFINED: no value is assigned and does not act as an empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// NUMBERS: numbers are literally just numbers. Also referred to as integers.

let degrees = 85;
console.log(degrees);

let precise = 999999999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; // 16 9s
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123');
console.log(a);

// STRINGS: datatype used to represent text. Either wrapped in single or double quotes

let string1 = 'single quotes';
let string2 = "double quotes";
console.log(string1, string2);

// numbers vs strings
let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

// OBJECTS: objects are used to store many values instead of singular value. Objects hold key value pairs.

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
};

console.log(frodo);
console.log(typeof frodo);

// ARRAYS: containers that hold a list of items

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);

// addition and concatenation
let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let firstName = 'Eli';
let lastName = 'Smith';
let houseNumber = 5508;
let street = "Spicebush Drive";
let city = "Indianapolis";
let state = "Indiana"
let zipcode = 46254

console.log(firstName + ' ' + lastName + ' ' + houseNumber +' ' + street, city, state + ' ' + zipcode);

// STRING PROPERTIES:
    // properties are qualities associated with a data type
    // strings and numbers both have qualities associated with them, and their own properties

let myName = 'Eli'
console.log(myName.length); // Only time JavaScript doesn't start counting from zero

// STRING METHODS: Methods are tools that help us manipulate our data
    // .Properties use ' . ', methods use '.Methods()'

let myNameIs = 'Eli'
console.log(myNameIs.toUpperCase());

let home = "My home is Eagle Creek"
console.log(home.includes('Eagle'));

let sent = 'this sentence will be split into individual parts'
console.log(sent.split(' '));