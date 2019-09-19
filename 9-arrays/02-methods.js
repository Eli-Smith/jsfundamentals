let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

// for (foodItem of food){
//     console.log(foodItem);
// }

food.push('Pizza'); // appends pizza to the end of the array
console.log('Push', food);

food.splice(1, 1, 'bananas'); // removes shrimp and adds bananas ----> (index, how many values to cut, what to add in that location)
console.log('Splice: ', food);

food.splice(2, 0, 'Sweet potato pie');
console.log('Splice 2:', food);

food.pop(); // pop() removes the last item of an array
console.log('Pop', food);

food.shift(); // removes the first element of an array
console.log('Shift:', food);

food.unshift('Popcorn', 'steak') // unshift() adds one or more elements to the beginning of an array
console.log('unshift:', food);