import { students } from "./mock.js";

const nameStartingWithA = students.filter(student => student.nome[0] === 'A');

console.log(nameStartingWithA);
