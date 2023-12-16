import { students } from "./mock.js";

function sortStudents(students) {
    return students
        .sort((student1, student2) => student1.nome.localeCompare(student2.nome));
}

console.log(sortStudents(students));
