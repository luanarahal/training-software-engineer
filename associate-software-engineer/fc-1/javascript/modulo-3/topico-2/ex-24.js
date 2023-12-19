import { students } from "./mock.js";

function formatToPTBRDate(date) {
    return new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'long', year: 'numeric'}).format(date);
}

function formatDate(date) {
    const dateOriginal = new Date(date);
    const day = dateOriginal.getDate() + 1;
    const month = dateOriginal.getMonth();
    const year = dateOriginal.getFullYear();
    const formattedDate = new Date(year, month, day);

    return formattedDate;
}

students.forEach(student => {
    student.dataNascimento = formatToPTBRDate(formatDate(student.dataNascimento));
});

console.log(students);
