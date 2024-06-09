// short circuit
let a = 5;
let b = 4;
let func = () => console.log('Javed bhai cool !');
a == 5 && func();
a == 5 && b == 4 && func();
a == 5 && b == 4 && console.log('Pakistan.');
a == 5 || b == 5 && func();
export {};
