import { students } from "./mock.js";

function studentsBirthdaysInMarch() {
    const birthdaysInMarch = students.filter(person => {
        const dateStringToDate = new Date(person.dataNascimento);

        const extractMonth = dateStringToDate.getMonth() + 1;

        return extractMonth === 3;
    });

    return birthdaysInMarch;
}

console.log(studentsBirthdaysInMarch());
