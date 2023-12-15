import { students } from "./mock.js";

function convertStringDateToDate(students) {
    return new Date(students.dataNascimento);
};

const convertedDates = students
    .map(student => convertStringDateToDate(student));

console.log(convertedDates);
