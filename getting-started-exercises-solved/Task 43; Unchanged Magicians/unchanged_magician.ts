/*Question # 43: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array. 
Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great 
to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and 
store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array 
with the Great added to each magician’s name.*/
function show_magicians(magicians: string[]){
    for (let i = 0; i< magicians.length; i++){
        console.log(`${i+1}. ${magicians[i]}`);
    }
}
function make_great(magicians: string[]){
    let greatMagician = [];
    for (let i = 0; i< magicians.length; i++){
        greatMagician[i]= (`The Great ${magicians[i]}`);
        console.log(`${i+1}. ${greatMagician[i]}`)
    }
}
let magician = ["Criss Angel", "Derren Brown", "Lance Burton"]

console.log('Before adding "The Great"');
show_magicians(magician);
console.log('After adding "The Great"');
make_great(magician);
console.log('Old unchanged array');
show_magicians(magician);