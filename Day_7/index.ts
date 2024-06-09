//QUESTION 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message 
//             indicating the number of people you are inviting to dinner.
let guests : string[] = ['Muhammad Ali','Muhammad Javed','Muhammad Fareed'];
console.log(`\nI am inviting ${guests.length} guests in my dinner party.\n`);

//QUESTION 20: Think of something you could store in an array. For example, you could make a list of 
//mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that 
//creates a list containing these items.

console.log(`\n${guests} are my best friends.\n`);

//QUESTION 21: Think of something you could store in a TypeScript Object. Write a program that creates 
//             Objects containing these items.

let book : {title:string; author:string; yearPublish:number} = {
    title : "THE HOBBIT",
    author : "J.R.R. Tolkien",
    yearPublish : 1937
}

console.log(`\nBook inf : ${book.title} by ${book.author} and published in ${book["yearPublish"]}\n`)

//another example of typescript object

let mySelf : {name:string; city:string; age:number} = {
    name : "Muhammad Javed",
    city : "Lahore",
    age : 44
}

console.log(`\nMy name is ${mySelf.name}, I live in ${mySelf.city} and i am ${mySelf.age} old . \n`)

export{};