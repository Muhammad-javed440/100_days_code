interface Student {
    student_name:string;
    student_id:number;
}
let Student1:Student={
    student_id:23,
    student_name:'Muhammad Javed'
}
interface Teacher1 {
   teacher_name:string;
   teacher_id:number
}
let teacher4:Teacher1={
    teacher_id:25,
    teacher_name:'Muhammad Ali'
}
type intersected_type1 = Student&Teacher1;
let obj1:intersected_type1={
    teacher_id:34,
    teacher_name:'Muhammad Javed',
    student_id:44,
    student_name:'Ahmed'
}
console.log(obj1)