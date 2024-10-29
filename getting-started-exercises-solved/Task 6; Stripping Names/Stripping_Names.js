"use strict";
/*Q. Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n",
at least once. Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
let myName = " \t Alla Ud Din Ali Ahmad \n"; // Assigning a string with leading and trailing whitespaces to the variable myName
console.log("Name with whitespaces");
console.log(myName);
let myNameWithoutWhiteSpace = myName.trim(); // Using the trim() function to remove leading and trailing whitespaces from myName
console.log("Name without whitespaces");
console.log(myNameWithoutWhiteSpace);
