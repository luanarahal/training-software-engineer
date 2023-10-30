import { students } from "./mock.js";

const filteringTheYoungestAboveTwentyYearsOld = students
    .filter(student => student.idade > 20)
    .reduce((youngest, student) => {
        if (!youngest || student.idade < youngest.idade) {
            return student;
        }
        return youngest;
    }, null);

console.log(filteringTheYoungestAboveTwentyYearsOld);
