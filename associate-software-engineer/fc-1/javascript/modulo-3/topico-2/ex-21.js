import { students } from "./mock.js";

function convertStringDateToDate() {
    const dateStringtoDate = students.map(person => {
        return new Date(person.dataNascimento);
    });

    return dateStringtoDate;
}

console.log(convertStringDateToDate());
