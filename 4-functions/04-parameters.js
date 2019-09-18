//
function zach(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`)
}

zach('cheese pizza');

// function parameters are place holders for data that we pass into the functions when calling or invoking the function

// functions need parameters to be able to accept data that we pass to them

function fullName(firstName, lastName) {
    let name = firstName + " " + lastName;
    console.log(`Hello, my name is ${name}`);
}

fullName('Elijah', 'Smith');