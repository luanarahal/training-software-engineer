import { students } from "./mock.js";

function getStudentsAgeAbove18(students, age) {
    return students.filter(student => student.idade > age);
} 
console.log(getStudentsAgeAbove18(students, 18));
