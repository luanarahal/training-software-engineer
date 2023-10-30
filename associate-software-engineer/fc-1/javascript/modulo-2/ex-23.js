import { students } from "./mock.js";

const studentsWith21 = students.some(student => student.idade === 21);

console.log(studentsWith21);
