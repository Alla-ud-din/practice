/*Q.Write a series of conditional tests. Print a statement describing each test and 
your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let language = 'typescript';
//typescript is case sensitive
console.log("Is language === 'TypeScript'? I predict false.");
console.log(language === 'TypeScript');
//Comparing the value of the 'language' variable with the string 'TypeScript' and printing the result
console.log("Is language.toLowerCase() === 'typescript'? I predict true.");
console.log(language.toLowerCase() === 'typescript');
//Converting the 'language' variable to lowercase using the toLowerCase() method and comparing it with the string 'typescript'
console.log("Is language.length > 5? I predict true.");
console.log(language.length > 5);
//Checking if the length of the 'language' variable is greater than 5 and printing the result
console.log("Is language.includes('script')? I predict true.");
console.log(language.includes('script'));
//Checking if the 'language' variable contains the substring 'script' and printing the result
console.log("Is language.charAt(0) === 'J'? I predict false.");
console.log(language.charAt(0) === 'J');
//Checking if the first character of the 'language' variable is equal to 'J' and printing the result
console.log("Is language.toUpperCase() === 'TYPESCRIPT'? I predict true.");
console.log(language.toUpperCase() === 'TYPESCRIPT');
//Converting the 'language' variable to uppercase using the toUpperCase() method and comparing it with the string 'TYPESCRIPT'
console.log("Is language !== 'javascript'? I predict true.");
console.log(language !== 'javascript');
//Checking if the 'language' variable is not equal to the string 'javascript' and printing the result
console.log("Is language.slice(0, 4) === 'type'? I predict true.");
console.log(language.slice(0, 4) === 'type');
/*Extracting the substring from the 'language' variable starting at index 0 and ending at index 4 (exclusive),
and checking if it is equal to the string 'type' and printing the result*/
console.log("Is language.endsWith('script')? I predict true.");
console.log(language.endsWith('script'));
//Checking if the 'language' variable ends with the substring 'script' and printing the result
console.log("Does language contain the word 'python'? I predict false.");
console.log(language.includes('python'));
//Checking if the 'language' variable contains the substring 'python' and printing the result
