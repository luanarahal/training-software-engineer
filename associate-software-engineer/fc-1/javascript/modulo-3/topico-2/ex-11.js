import { students } from "./mock.js";

function verifyAgesAbove18(students, age) {
    return students.filter(student => student.idade > age);
} 
console.log(verifyAgesAbove18(students, 18));
