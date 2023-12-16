import { students } from "./mock.js";

function filterStudentsByName(students, name) {
    const studentsNamedAna = students.filter(student => student.nome === name);
    return studentsNamedAna;
}

console.log(filterStudentsByName(students, "Ana"));
