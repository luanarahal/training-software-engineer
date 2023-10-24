import { students } from "./mock.js";

function thereAreStudentsOfTheSameAge(value) {
    const sameAgeStudents = students.filter(student => student.idade === value);
    return sameAgeStudents;
};   

console.log(students.some(thereAreStudentsOfTheSameAge));
