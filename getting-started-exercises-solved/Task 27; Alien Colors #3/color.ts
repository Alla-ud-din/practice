import PromptSync = require("prompt-sync") 
var prompt = require('prompt-sync')()
/*Q.Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alien_color =["green", "yellow", "red"]
let input= prompt("Enter 1 for green, 2 for yellow, 3 for red: ")
if (input ==1){
    console.log("player just earned 5 points")
}
else if (input==2){
    console.log("Player just earned 10 points")
}
else if (input==3){
    console.log("Player just earned 15 points")
}
else {
    console.log("please select right option")
}