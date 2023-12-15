import { students } from "./mock.js";

const dateStringtoDate = students
    .map(person => {
        return new Date(person.dataNascimento);
    })

console.log(dateStringtoDate);
