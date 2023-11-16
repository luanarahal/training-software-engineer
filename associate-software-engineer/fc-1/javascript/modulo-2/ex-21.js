import { students } from "./mock.js";

const studentWith20 = students.find(student => student.idade === 20);

console.log(studentWith20);
