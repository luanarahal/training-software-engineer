import { students } from "./mock.js";

const studentsUnder21 = students.filter(student => student.idade < 21);

console.log(studentsUnder21);
