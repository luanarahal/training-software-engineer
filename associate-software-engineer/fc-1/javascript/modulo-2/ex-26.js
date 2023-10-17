import { students } from "./mock.js";

const alphabeticalOrder = students.sort((student1, student2) => {
    if (student1.nome < student2.nome) {
        return -1;
    } else {
        return true;
    }
});

console.log(alphabeticalOrder);
