import { students } from "./mock.js";

function averageAge() {
    const filteredStudents = students
    .filter((student) => {
        const birthDate = new Date(student.dataNascimento);
        const month = birthDate.getMonth() + 1;
        return month === 5;
    })
    const sumAges = filteredStudents
    .reduce((total, student) => total + student.idade, 0);
        return sumAges / filteredStudents.length;
    }

console.log(averageAge());
