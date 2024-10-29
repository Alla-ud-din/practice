"use strict";
/*Q. Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries,
cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/
let cities = ["Paris, France", "New York City, United States", "London, United Kingdom", "Venice, Italy",
    "Vancouver, Canada", "Barcelona, Spain", "Cape Town, South Africa", "San Francisco, United States",
    "Sydney, Australia", "Rome, Italy"
];
console.log("The top ten most beautiful cities in the world are:\n");
for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i]}\n`);
}
