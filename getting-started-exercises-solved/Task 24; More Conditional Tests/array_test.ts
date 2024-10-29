import PromptSync = require("prompt-sync"); 
var prompt = require('prompt-sync')();
let fruit = ["Apple", "Banana", "Mango", "Orange"]
let favourite_fruit = prompt("Enter your favourite fruit: ")
console.log(fruit)
console.log(favourite_fruit)
/*The return value of indexOf() is of type number, 
representing the index of the element in the array. 
If the element is found, the index will be greater than or equal to 0; 
otherwise, it will be -1.*/
if (fruit.indexOf(favourite_fruit) !== -1){
    console.log(`We have ${favourite_fruit}`)
}
else {
    console.log(`We don't have ${favourite_fruit}`)
}