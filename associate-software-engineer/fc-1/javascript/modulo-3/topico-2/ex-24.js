import { students } from "./mock.js";

function formatDate(dateOfBirth) {
    const date = new Date(dateOfBirth);
    const day = date.getDate() + 1;
    const month = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = new Date(year, month, day);
    return formattedDate;
}

const convertDateToString = (students) => {
    return students.map(student => {
        const formattedDate = formatDate(student.dataNascimento);
        return new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'long', year: 'numeric'}).format(formattedDate);
    });
}

console.log(convertDateToString(students));
