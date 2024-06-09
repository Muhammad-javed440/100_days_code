let str: string = "hello";

let paddedStart: string = str.padStart(12,'$');  // Pads with spaces by default
console.log(`'${paddedStart}'`);  // Output: '     hello'

let paddedEnd: string = str.padEnd(15, '*');  // Pads with asterisks to the right
console.log(`'${paddedEnd}'`);  // Output: 'hello*****'
