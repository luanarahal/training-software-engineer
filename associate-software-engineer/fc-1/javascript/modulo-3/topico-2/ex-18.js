import { students } from "./mock.js";

const birthdaysInMarch = students
    .filter(person => {
        const dateStringToDate = new Date(person.dataNascimento);

        const extractMonth = dateStringToDate.getMonth() + 1;

        return extractMonth === 3;
    });

console.log(birthdaysInMarch);
