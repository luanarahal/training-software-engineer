import { students } from "./mock.js";

const minorOf21 = students.filter(student => student.idade < 21);

console.log(minorOf21);
