// Q.16.

let guests : string[] = ['Muhammad Ali','Muhammad Javed','Muhammad Fareed'];
console.log(guests);
 guests.unshift('Muhammad Hammad'); // adding start of array
 console.log(guests);
 guests.splice(2,0,'Muhammad Ibrahim','Muhammad Faisal');// adding on second index of array
 console.log(guests);
 guests.push('Muhammad Amjad')// adding in the last of array
 console.log(guests);
guests.forEach(guest =>{
    console.log(`Dear ${guest} , I would like to invite you in my dinner party.`)
})

//QUESTION 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can 
//             only invite two guests.


while(guests.length>=3){
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest},I can not invite you.`); 
}
console.log(guests);
guests.forEach(guest =>{
    console.log(`${guest}, You are still invited .`)
})

//QUESTION 18: Seeing the World: Think of at least five places you’d like to visit.

let places :string[] = ['Pakistan','China','Itly','Iran','Turky']
places.forEach(place =>{
 console.log(`${place} is a beautiful country .`);

})

// in different orders
console.log(`In orignal order : ${places}`);
console.log(`In alphabetical order : ${[...places].sort()}`);
console.log(`In alphabetical  order : ${[...places].sort().reverse().reverse()}`);// to double reverse ,it comes orgnal array

export{};// export nothing
