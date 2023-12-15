import { students } from "./mock.js";

function sortStudents(students) {
    const sortStudentsAlphabetically = students
        .sort((student1, student2) => student1.nome.localeCompare(student2.nome));
    return sortStudentsAlphabetically;
}

console.log(sortStudents(students));
