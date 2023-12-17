import { students } from "./mock.js";

function formatDate(date) {
    const dateOriginal = new Date(date);
    const day = dateOriginal.getDate() + 1;
    const month = dateOriginal.getMonth();
    const year = dateOriginal.getFullYear();

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
