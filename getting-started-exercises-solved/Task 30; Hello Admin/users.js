"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
/*Q.Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let users = ["Admin", "Fakhar", "Ali", "Muazam", "Mukaram"];
let username = prompt("Enter your username\t");
let index;
//// Check if the username is present and print a corresponding message
if (username == "Admin") {
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
