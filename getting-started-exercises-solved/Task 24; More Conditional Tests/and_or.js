"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
/*Determine if a student passed a course based on two criteria:
achieving a minimum score of 70 and attending at least 80% of the classes.*/
let score = prompt("Marks of student = ");
let attendance = prompt("Attendance (in %)= ");
if (score >= 70 && attendance >= 80) {
    console.log("Student is pass");
}
else {
    console.log("Student is fail");
}
