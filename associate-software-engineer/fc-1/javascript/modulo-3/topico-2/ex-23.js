import { students } from "./mock.js";

const olderStudent = students
    .sort((student1, student2) => student2.idade - student1.idade);

console.log(olderStudent[0]);
