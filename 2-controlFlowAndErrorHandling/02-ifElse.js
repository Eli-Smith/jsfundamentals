/*
let weather = 75;

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('No jacket necessary');
}
*/

// IF ELSE CHALLENGE
//let name = 'Richard'

//if (name == 'Eli') {
//    console.log("Hello, my name is " + name);
//} else {
  //  let name = 'Eli'
 //   console.log('Hello, is your name ' + name +'?');
//}

//console.log(name)

// CHALLENGE BRONZE
let name = 'zAchARy';

if (name[0] == name[0].toUpperCase() ) {
    console.log(name);
} else {console.log("Hey this isn't written correclty");
};
// SILVER
if (name[0] == name[0].toUpperCase() ) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}
// the slice() method extracts parts of a string and returns the extracted parts in a new string
// GOLD
if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]+name.slice(1).toLowerCase());
} else {
    console.log(name[0].toUpperCase()+name.slice(1).toLowerCase());
};

// ELSE IF

let age = 26;

if (age >= 25){
    console.log("Yay! You can rent a car");
} else if (age >= 21){
    console.log('Yay! You can drink!');
} else if (age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you\'re too young to do anything!');
}