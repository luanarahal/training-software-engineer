import { students } from "./mock.js";

const studentsSortedAlphabetically = students
    .sort((student1, student2) => student1.nome.localeCompare(student2.nome));

console.log(studentsSortedAlphabetically);
