import { students } from "./mock.js";

const studentsByAgeGroup = students
    .sort((student1, student2) => student1.idade - student2.idade)
    .map(student => {
        if (student.idade > 0 && student.idade < 12) {
            return `Criança`;
        } else if (student.idade >= 12 && student.idade < 18) {
            return `Adolescente`;
        } else if (student.idade >= 18 && student.idade < 60) {
            return `Adulto`;
        } else {
            return `Idoso`;
        }
    });

console.log(studentsByAgeGroup);
