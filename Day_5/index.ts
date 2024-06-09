
// Q.13
let convase : string[] = ["Vigo", "Bike", "Hiroof", "Civic"];
convase.forEach(Element =>{
   console.log(`\nI would like own a ${Element}.\n`)
})

// Q.14
let names : any[] = ['Muhammad Javed','Muhammad Ali','Muhammad ibrahim','Muhammad fareed']
names.forEach(name=>{
    console.log(`\nHello ${name},i would like to invite you in my dinner party.\n`)
})

// Q.15  changing aguest

console.log(names.splice(1,1,'Muhammad Hammad'));
console.log(names);
names.forEach(name=>{
    console.log(`\nHello ${name},i would like to invite you in my dinner party.\n`)
})





