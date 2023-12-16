import { students } from "./mock.js";

function calculateAge(dateOfBirth, currentDate) {
    const birthDate = new Date(dateOfBirth);
    const difference = currentDate - birthDate;
    const ageInMilliseconds = new Date(difference);
    return Math.abs(ageInMilliseconds.getUTCFullYear() - 1970);
}

function convertDateOfBirthToAge(students) {
    const currentDate = new Date();
    const agesOfStudents = students.map(person => calculateAge(person.dataNascimento, currentDate));
    return agesOfStudents;
}

console.log(convertDateOfBirthToAge(students));
