/*
    - falsy values: a falsy value is a value that is considered false when encountered in boolean context
        - there are 6 falsy values in JavaScript:
            1. False
            2. 0
            3. "", '', ``
            4. null
            5. undefined
            6. NaN (Not a number)

*/

// let isOn = true;

//if (isOn) {
//    console.log('The light is on!');
//}

let isOn = false;

if (isOn == false) {
    console.log('The light is off!');
}

let weather = 79;

if (weather < 65) {
    console.log('wear a jacket')
}