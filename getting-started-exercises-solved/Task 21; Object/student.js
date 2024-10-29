"use strict";
/*Q. They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.*/
function students(first, second, age, height) {
    let student = {
        firstName: first,
        secondName: second,
        age: age,
        height: height + " foot"
    };
    return student;
    // Return the student object
}
// Call the students function with specific values and print the returned student object to the console
console.log(students("Muazam", "Sultan", 5, 3.3));
console.log(students("Ali", "Ahmad", 6, 3.75));
console.log(students("Mukaram", "Khalfan", 1, 2.5));
