import { students } from "./mock.js";

const formattedDateToString = students
    .map(student => {
        const birthDate = new Date(student.dataNascimento);

        const day = birthDate.getDate() + 1;
        const month = birthDate.getMonth() + 1;
        const year = birthDate.getFullYear();

        const formattedDate = new Date(year, month - 1, day)

        return new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'long', year: 'numeric'}).format(formattedDate);
    });

console.log(formattedDateToString);
