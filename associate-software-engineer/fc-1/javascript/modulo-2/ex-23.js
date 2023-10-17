import { students } from "./mock.js";

const ageEqualTo21 = students.some(student => student.idade === 21);

console.log(ageEqualTo21);
