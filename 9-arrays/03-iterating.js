/*
    -how can we iterate over an array?
        - for of loop
        - for loop
        - forEach() method

    - all of the above iterate over porperties in an array

*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (let i = 0; i <= food.length; i++) {
    console.log(food[i]);
};

food.forEach(foodItem => { 
    console.log(foodItem)
})

food.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})

// CHALLENGE
let movies = ['Arrival', 'The Matrix', 'Interstellar', 'The Prestige'];

movies.push('Black Panther')

movies.splice(1, 1, "Pan's Labyrinth");

movies.forEach(title => {
    console.log(title);
});


