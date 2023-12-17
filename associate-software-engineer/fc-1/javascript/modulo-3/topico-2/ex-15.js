import { students } from "./mock.js";

function calculateAge(dateOfBirth, currentDate) {
    const birthDate = new Date(dateOfBirth);
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - new Date(0).getUTCFullYear();
    return Math.abs(ageInYears);
}

function convertDateOfBirthToAge(students) {
    const currentDate = new Date();
    const agesOfStudents = students.map(person => calculateAge(person.dataNascimento, currentDate));
    return agesOfStudents;
}

console.log(convertDateOfBirthToAge(students));
