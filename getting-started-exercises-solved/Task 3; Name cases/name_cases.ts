/*Q. Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/
let myName = "aLi ahMad";
console.log("LowerCase: ", myName.toLowerCase());  //built-in LowerCase function
console.log("UpperCase: ",myName.toUpperCase());  //Built-in UpperCase function
function toTitlecase(x:string) {    //TitleCase function
let splitWords = myName.split(" ");  //Splitting of words based on basis of space
for (let i = 0; i < splitWords.length; i++) {  // Iterating over each word
    let word = splitWords[i];        //Accessing the current word
    let firstAlphabet = word.charAt(0).toUpperCase();  //converting first letter to uppercase
    let restOfWord = word.slice(1).toLocaleLowerCase(); //converting rest of the word to lowercase
    splitWords[i] = firstAlphabet + restOfWord; // Combining the modified first character and the rest of the word
}
return splitWords.join(" "); //Joining the modified words back into a single string with spaces in between
}
let titleCase = toTitlecase(myName); //Calling the toTitlecase function
console.log("TitleCase: ",titleCase);
