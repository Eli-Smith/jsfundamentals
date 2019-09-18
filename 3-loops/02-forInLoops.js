// FOR IN LOOPS ARE USED FOR OBJECTS

// great for iterating over values in an object. Properties in an object are what's called 'enumerable'
    //for in loops iterate over and objects enumerable properties

let student = {
    name: 'Eli',
    awesome: true,
    degree: 'JavaScript',
    week: 1
};

for (let item in student) {
    console.log(item);
    console.log(student[item]);
};

let catArray = ['tabby', 'persian', 'burmese', 'rag doll', 'maine coon'];

for (let cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}

//CHALLENGE:

let name = 'eLiJAh'
let capName;

for (let n in name) {
    //console.log(n);
    if (n == 0) {
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    };
};

console.log(capName);