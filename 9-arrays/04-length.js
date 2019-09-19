let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length); // length is the only thing in JavaScript that does not start counting from 0

let colors = ['Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Purple'];
console.log(colors.length);

console.log(colors.toString());

console.log (typeof colors);

// CHALLENGE
let arr = [1, 2, 3, 4, 5]
console.log(arr instanceof Array); // console logs true

arr.reverse(); // reverse() method reverses the order of elements in an array

arr.forEach(num => {
    console.log(num);
})