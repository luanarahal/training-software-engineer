import { students } from "./mock.js";

function convertDateOfBirthToAge() {
    const ageOfStudents = students.map(person => {
        const currentDate = new Date();
        const dateOfBirth = new Date(person.dataNascimento);

        const age = currentDate - dateOfBirth;
        const ageInYears = age / 1000 / 60 / 60 / 24 / 365;

        return Math.floor(ageInYears);
    });

    return ageOfStudents;
}

console.log(convertDateOfBirthToAge());
