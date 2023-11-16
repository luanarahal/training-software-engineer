import { students } from "./mock.js";

const studentsNameWithMoreThan3Chars = 
    students
        .filter(student => student.nome.length > 3)
        .map(student => student.nome);

console.log(studentsNameWithMoreThan3Chars);
