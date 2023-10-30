import { students } from "./mock.js";

const listStudentsAlphabetically = students
    .sort((student1, student2) => {
        if(student1.nome[0] === student2.nome[0]) {
            return student1.idade.toString().localeCompare(student2.idade.toString())
        } else {
            return student1.nome.localeCompare(student2.nome)
        }
    })
    .map(student => `Nome: ${student.nome} - Idade: ${student.idade}`);

console.log(listStudentsAlphabetically);
