import { students } from "./mock.js";

const olderStudent = students.reduce((oldestStudent, student) => {
    return oldestStudent.idade > student.idade ? oldestStudent : student; 
});

console.log(olderStudent);
