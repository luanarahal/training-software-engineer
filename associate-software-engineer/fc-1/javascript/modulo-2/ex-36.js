import { students } from "./mock.js";

const studentsWithMoreThan3Characters = students
    .filter(student => student.nome.length > 3 && student.idade > 20)
    .map(student => `Nome: ${student.nome} - Idade: ${student.idade}`);

console.log(studentsWithMoreThan3Characters);
