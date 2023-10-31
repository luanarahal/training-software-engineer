import { students } from "./mock.js";

const thereAreStudentsWith21 = students.some(student => student.idade === 21);

console.log(thereAreStudentsWith21);
