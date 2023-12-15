import { students } from "./mock.js";

function formatDate(student) {
    const birthDate = new Date(student.dataNascimento);

        const day = birthDate.getDate() + 1;
        const month = birthDate.getMonth();
        const year = birthDate.getFullYear();

        const formattedDate = new Date(year, month, day);
    return formattedDate;
}

const formattedDateToString = students
    .map(student => {
        const formattedDate = formatDate(student);
        return new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'long', year: 'numeric'}).format(formattedDate);
    });

console.log(formattedDateToString);
