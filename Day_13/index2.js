"use strict";
let str = "hello";
let paddedStart = str.padStart(12, '$'); // Pads with spaces by default
console.log(`'${paddedStart}'`); // Output: '     hello'
let paddedEnd = str.padEnd(15, '*'); // Pads with asterisks to the right
console.log(`'${paddedEnd}'`); // Output: 'hello*****'
