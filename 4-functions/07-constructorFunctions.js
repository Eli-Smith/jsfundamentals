//
let person1 = {
    name: 'Macy',
    age: 26,
    canVote: true
};

let person2 = {
    name: "Jeremy",
    age: 15,
    canVote: false
};

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
};
// (1)    (2)          (3)
function Person(name, age, canVote) {
//  (4)  (5)     (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)  (8)
let person4 = new Person('James', 80, true);
console.log(person4);

/*
    1. function keyword
    2. function name (For constructor functions, the name should be capitalied)
    3. parameters. These wil be the values of the object once we call the function
    4. the "this" keyword give us the ability to refer back to wahtever called or activated it. In this case, 'this' refers to our function 'Person'
    5. this will be the key of the new object we create. This is NOT referring to the parameters
    6. this IS referring to the parameter that we pass through our contructor function
    7 & 8 - the 'new' keyword is calling our Person constructor function, creating a 'new' person with the values we pass through as arguments.
*/