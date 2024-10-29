"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let x = prompt("Right your name in lowercase\t");
//Now if user inter name in uppercase or titlecase, it will give wrong answer
console.log(x == x.toLowerCase());
