import { students } from "./mock.js";

function verifyStudentsNamedAna(students, name) {
    const studentsNamedAna = students.filter(student => student.nome === name);
    return studentsNamedAna;
}

console.log(verifyStudentsNamedAna(students, "Ana"));
