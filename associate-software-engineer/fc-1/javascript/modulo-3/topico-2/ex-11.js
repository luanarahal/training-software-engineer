import { students } from "./mock.js";

const studentsAbove18 = students
    .filter(student => student.idade > 18);

console.log(studentsAbove18);
