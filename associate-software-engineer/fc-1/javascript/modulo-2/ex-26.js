import { students } from "./mock.js";

const alphabeticalOrder = students.sort((student1, student2) => student1.nome.localeCompare(student2.nome));

console.log(alphabeticalOrder);
