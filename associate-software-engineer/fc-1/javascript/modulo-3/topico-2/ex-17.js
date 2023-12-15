import { students } from "./mock.js";

const studentsNamedAna = students
    .filter(student => student.nome === "Ana");

console.log(studentsNamedAna);
