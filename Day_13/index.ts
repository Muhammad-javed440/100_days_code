// Objects;
let teacher:{
    name:string;
    experience:number;
    age ? :number;
};
teacher={
    name:'Muhammad javed',
    experience:5,
    age:44
}

console.log(teacher.name);
console.log(teacher.experience);

// Types ;
type Teacher = {
    name:string;
    experience:number;
};
let teacher1:Teacher={
    name:"Muhammad javed",
    experience:5
};

let teacher2:Teacher={
    name:'Muhammad Ali',
    experience:4
};

let teacher3:Teacher={
    name:'Muhammad Ibrahim',
    experience:3
}
console.log(teacher1.name)
console.log(teacher2.name)
console.log(teacher3.name)
console.log(teacher1.experience)
console.log(teacher2.experience)
console.log(teacher3.experience)


// interface

interface manegar{
    name:string;
    exp ?:number
}
let storeManegar:manegar={
    name:'amjad ali',
    exp:6
}
 let HomeManegar : manegar={
    name:'Amna'
 }
 console.log(storeManegar.name);
 console.log(HomeManegar.name)