import { students } from "./mock.js";

const studentsSortedByDescendingAge = students
    .sort((student1, student2) => 
        student2.idade.toString().localeCompare(student1.idade.toString()));

console.log(studentsSortedByDescendingAge);
