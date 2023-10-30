import { students } from "./mock.js";

const listStudentsAlphabetically = students
    .map(student => `Nome: ${student.nome} - Idade: ${student.idade}`)
    .sort((student1, student2) => {
        if(student1.nome < student2.nome) {
            return student1;
        } else if(student1.nome === student2.nome){
            if (student1.idade < student2.idade) {
                return student1;
            }
            else {
                return student2;
            }
        }
    });

console.log(listStudentsAlphabetically);
