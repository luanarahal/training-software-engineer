import { students } from "./mock.js";

const olderStudent = students.reduce((student1, student2) => {
    return student1.idade > student2.idade ? student1 : student2; 
});

console.log(olderStudent);
