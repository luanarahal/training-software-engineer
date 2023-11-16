import { students } from "./mock.js";

const studentsNameStartingWithA = students.filter(student => student.nome[0] === 'A');

console.log(studentsNameStartingWithA);
