"use strict";
/*Q.Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
let favourite_fruit = ["Mango", "Orange", "Banana"];
/*Checking if fruit is present in the favourite_fruit array using the indexOf() method,
and printing a message if it is found*/
if (favourite_fruit.indexOf("Apple") > -1) {
    console.log(`You love crisp apples.`);
}
if (favourite_fruit.indexOf("Banana") > -1) {
    console.log(`You really like banana`);
}
if (favourite_fruit.indexOf("Orange") > -1) {
    console.log(`You adore juicy orange`);
}
if (favourite_fruit.indexOf("Pineapple") > -1) {
    console.log(`You enjoy juicy pineapples.`);
}
if (favourite_fruit.indexOf("Cherry") > -1) {
    console.log(`You relish sweet cherries.`);
}
/*const array: number[] = [1, 2, 3, 4, 5];
const element: number = 3;

const index = array.indexOf(element);

console.log(index);
const array1 = [1, 2, 3, 4, 5];
const element1 = 3;
const index1 = array.includes(element)
console.log(index)*/
