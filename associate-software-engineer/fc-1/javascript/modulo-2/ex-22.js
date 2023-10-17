import { students } from "./mock.js";

const over19YearsOld = students.every(student => student.idade >= 19);

console.log(over19YearsOld);
