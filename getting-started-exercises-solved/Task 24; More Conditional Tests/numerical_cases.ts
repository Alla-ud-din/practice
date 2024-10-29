import PromptSync = require("prompt-sync"); 
var prompt = require('prompt-sync')();
let firstNumber = prompt("Enter first Number=\t")
let secondNumber = prompt("Enter second Number=\t")
if (firstNumber!==secondNumber){
    if (firstNumber>secondNumber){
    console.log(`${firstNumber} is greater then ${secondNumber}`)
        }
    else
    console.log(`${firstNumber} is smaller then ${secondNumber}`);
    }
else {
    console.log(`${firstNumber} is equal to ${secondNumber}`)
}