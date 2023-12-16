import { students } from "./mock.js";

function differenceBetweenTwoStudents(student1, student2) {
    const date1 = new Date(student1.dataNascimento);
    const date2 = new Date(student2.dataNascimento);

    return (date1 - date2)/ 1000 / 60 / 60 / 24;
}

console.log(`A diferença entre os estudantes é de ${differenceBetweenTwoStudents(students[0], students[1])} dias`);
