import { students } from "./mock.js";

function convertStringDateToDate(students) {
    return new Date(students.dataNascimento);
};

students.forEach(student => {
    student.dataNascimento = convertStringDateToDate(student)
});

console.log(students);
