"use strict";
/*Q. Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
let favoriteTransportation = ["motorcycle", "car", "bicycle", "train"];
for (let i = 0; i < favoriteTransportation.length; i++) {
    let item = favoriteTransportation[i]; // Accessing the current item in the favoriteTransportation array
    if (item === "motorcycle") { // Checking if the item is "motorcycle"
        console.log("I would like to own a Honda motorcycle.");
    }
    else if (item === "car") { // Checking if the item is "car"
        console.log("I dream of driving a Tesla car.");
    }
    else if (item === "bicycle") { // Checking if the item is "bicycle"
        console.log("I enjoy riding a mountain bike.");
    }
    else if (item === "train") { // Checking if the item is "train"
        console.log("I love traveling by high-speed trains.");
    }
    else { // Executed if none of the above conditions match
        console.log("I have no preference for this mode of transportation.");
    }
}
