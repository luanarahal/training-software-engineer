import { students } from "./mock.js";

function verifyAgesAbove18(students) {
    return students.filter(student => student.idade > 18);
} 
console.log(verifyAgesAbove18(students));
