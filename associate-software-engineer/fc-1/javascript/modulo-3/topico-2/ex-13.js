import { students } from "./mock.js";

const youngerStudent = students
    .sort((student1, student2) => student1.idade - student2.idade);

console.log(youngerStudent[0]);
