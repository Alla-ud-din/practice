"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
/*Q.Add an if test to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let users = [];
let username = prompt("Enter your username\t");
//Check the username and print a corresponding message
if (users.length == 0) {
    console.log("We need to find some users!");
}
else if (username == "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
}
else if (username == "Fakhar") {
    console.log("Hello Fakhar, thank you for logging in again.");
}
else if (username == "Ali") {
    console.log("Hello Ali, thank you for logging in again.");
}
else if (username == "Muazam") {
    console.log("Hello Muazam, thank you for logging in again.");
}
else if (username == "Mukaram") {
    console.log("Hello Mukaram, thank you for logging in again.");
}
else {
    console.log("Sorry, write correct username");
}
