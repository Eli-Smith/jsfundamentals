// Loops offer us a quick and easy way to do something repreatedly, or loop over something

//NOTE: there is a danger of infinite loops

/*
    - for loops take in three parameters
        1. Initial expression
        2. condition
        3. increment expression
*/

//     (1)       (2)     (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
};

// CHALLENGE: Create a for loop that counts to 20 by 2s

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
};

//CHALLENGE: Create a for loop that counts down from 10 to 0 by 1s

for (let i = 10; i >= 0; i--) {
    console.log(i);
};

//CHALLENGE: Create a for loop that counts down from 0 to -24 by 2s

for ( let i = 0; i >= -24; i -= 2) {
    console.log(i);
};

//CHALLENGE: using a for loop, go through a name and display each letter individually

let name = "Elijah"

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
};

//CHALLENGE: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i;
};
console.log(sum);

// Iterates from 0 - 20 and announces whether a number is odd or even!
for (let i = 0; i <= 20; i++) {
    if(i % 2 == 0){
        console.log('This number is even!');
    } else {
        console.log('This number is Odd');
    }
    console.log(i);
}



// iterates from 0 - 10 and multiplies the number by 9 and logs it
for (let i = 0; i <= 10; i++) {
    let multiply = i * 9;
    console.log(multiply);
}