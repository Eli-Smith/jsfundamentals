//FOR OF LOOPS ARE USED FOR ARRAYS

// loop over iterable properties
    // iterable meaning able to parse through with numbers

    // we cannot use a for of loop with an object because objects do not have indexes or iterable properties
    // objects are enumerable
    let student = {
        name: 'Eli',
        awesome: true,
        degree: 'JavaScript',
        week: 1
    };

    for (let item of student) {
        console.log(item);
    };

    let dogArray = ['Husky', 'German Shephard', 'Pug', 'Border Collie', 'Chihuahua'];

    for (let dog of dogArray) {
        console.log(dog, 'goes bark');
    }