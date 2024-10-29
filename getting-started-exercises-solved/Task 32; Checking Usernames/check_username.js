"use strict";
/*Q.Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_user = ["Ali", "Fakhar", "Ali Ahmad", "Muazam", "Mukaram"];
let new_user = ["Tayyab", "Fakhar", "Muazam"];
let Duplicate = true;
for (let i = 0; i < new_user.length; i++) {
    for (let j = 0; j < current_user.length; j++) {
        if (new_user[i] === current_user[j]) {
            console.log(`person will need to enter a new username at ${[i]}`);
            Duplicate = false;
            break;
        }
    }
}
if (Duplicate) {
    console.log("All usernames are available");
}
