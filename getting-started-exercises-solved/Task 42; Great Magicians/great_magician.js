"use strict";
/*Question # 42: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great
to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
function show_magicians(magicians) {
    for (let i = 0; i < magician.length; i++) {
        console.log(`${i + 1}. ${magician[i]}`);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = (`The Great ${magician[i]}`);
        console.log(`${i + 1}. ${magician[i]}`);
    }
    return magician;
}
let magician = ["Criss Angel", "Derren Brown", "Lance Burton"];
console.log('Before adding "The Great"');
show_magicians(magician);
console.log('After adding "The Great"');
make_great(magician);
