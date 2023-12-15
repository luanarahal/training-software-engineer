import { students } from "./mock.js";

const youngerStudent = students
    .sort((a, b) => a.idade - b.idade);

console.log(youngerStudent[0]);
