import { students } from "./mock.js";

const sortStudentsAlphabeticallyAndByAge = students
    .sort((student1, student2) => {
        if(student1.nome[0] !== student2.nome[0]) {
            return student1.nome.localeCompare(student2.nome);
        }
        return student1.idade - student2.idade;    
    })
    .map(student => `Nome: ${student.nome} - Idade: ${student.idade}`);

console.log(sortStudentsAlphabeticallyAndByAge);
