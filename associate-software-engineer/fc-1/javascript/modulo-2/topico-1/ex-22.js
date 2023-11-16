import { students } from "./mock.js";

const studentsOver19 = students.every(student => student.idade >= 19);

console.log(studentsOver19);
