import { students } from "./mock.js";

function verifyAgesAbove18() {
    const studentsAbove18 = students.filter(student => student.idade > 18);
    return studentsAbove18;
} 
console.log(verifyAgesAbove18());
