import { students } from "./mock.js";

function studentsBirthdaysInMarch(students, month) {
    const birthdaysInMarch = students.filter(person => {
        const dateStringToDate = new Date(person.dataNascimento);
        const extractMonth = dateStringToDate.getMonth() + 1;
        return extractMonth === month;
    });

    return birthdaysInMarch;
}

console.log(studentsBirthdaysInMarch(students, 3));
