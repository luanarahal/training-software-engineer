import { students } from "./mock.js";

const studentsSortedByDescendingAge = students
    .sort((student1, student2) => 
        student2.idade - student1.idade);

console.log(studentsSortedByDescendingAge);
