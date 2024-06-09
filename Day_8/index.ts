//QUESTION 22: Intentional Error: Try to produce an array index error in one of your programs. Correct
//              the error before finishing.

let array : string[] = ['Ali','Javed','Fareed'];
console.log(array[3]);// there it get an error which is called an intrnational index error
console.log(array[2]);

//QUESTION 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let Car : boolean = true;
let car :string = 'Honda';
console.log(car == 'Honda');//true
console.log(car == 'Vigo'); //false
console.log(car == 'Suzuki');//false

//QUESTION 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// comparision between string
console.log('javed'== 'javed');
//console.log('Javed' === 'javed') This comparison appears to be unintentional because the types '"Javed"' and '"javed"' have no overlap.ts(2367)
// comparision between numbers

let a : number = 5 ;
let b : number = 3 ;
 console.log(a>b) ;//true
console.log( b>a) ;//false
console.log(a<b) ;//false
console.log(b<a) ;//true
console.log( a==b) ;//false
console.log(a==b) ;//false
console.log(b==a) ;//false