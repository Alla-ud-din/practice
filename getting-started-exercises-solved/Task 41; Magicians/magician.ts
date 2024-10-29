/*Question # 41: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array. */
function show_magicians(magicians: string[]){
    for (let i = 0; i< magician.length; i++){
        console.log(`${i+1}. ${magician[i]}`);
    }
}
let magician = ["Criss Angel", "Derren Brown", "Lance Burton"]
show_magicians(magician);
