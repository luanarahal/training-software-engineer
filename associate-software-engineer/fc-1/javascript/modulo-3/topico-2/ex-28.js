import { students } from "./mock.js";
import { getMonthNumber, isMonthTheSame } from "./utils.date.js";

function averageAge(students, monthName) {
    const monthNumber = getMonthNumber(monthName);

    const filteredStudents = students
    .filter((student) => isMonthTheSame(student.dataNascimento, monthNumber))

    if(filteredStudents.length === 0) {
        return `Não tem nenhum estudante que nasceu neste mês, portanto não é possível fazer a média.`;
    }

    const sumAges = filteredStudents
        .reduce((total, student) => total + student.idade, 0);

    return sumAges / filteredStudents.length;
}

console.log(averageAge(students, "Maio"));
