/*
    -switch statements execute a block of code depending on different cases
    -switch statements are often used together with break or default keywords
        -break keyword breaks out of the switch block alltogether
        -default keyword specifies code to run if there is no case match
*/

let officeCharacter = 'Pam';

switch (officeCharacter) {
    case 'Michael':
        console.log('Mym mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('I am fast. To give you a reference point, I\'m somewhere between a snake and a mongoose.');
        break;
    case 'Jim':
        console.log('Bears beats Battlestar Gallactica');
        break;
    default:
        console.log(`I'm sorry ${officeCharacter}, but do I know you?`);
        // Backticks are used for string interpolation
}

// CHALLENGE
let dessert = "cake";

switch (dessert) {
    case 'pie':
        console.log('Pie, pie me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu');
}

let num = -8;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work')
}
