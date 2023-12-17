import { students } from "./mock.js";

function getStudentsByAge(students, age) {
    return students.filter(student => student.idade > age);
} 
console.log(getStudentsByAge(students, 18));
