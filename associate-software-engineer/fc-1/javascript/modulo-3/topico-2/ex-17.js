import { students } from "./mock.js";

function verifyStudentsNamedAna() {
    const studentsNamedAna = students.filter(student => student.nome === "Ana");
    return studentsNamedAna;
}

console.log(verifyStudentsNamedAna());
