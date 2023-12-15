import { students } from "./mock.js";

const borninJuly = students
    .filter(student => {
        const birthDate = new Date(student.dataNascimento);
        const month = birthDate.getMonth() + 1;
        return month === 7;
    })

console.log(borninJuly);
