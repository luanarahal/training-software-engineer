import { students } from "./mock.js";
import { getMonthNumber, isMonthTheSame } from "./utils.date.js";

function studentsBirthdaysInMonth(students, monthName) {
    const monthNumber = getMonthNumber(monthName);
    const birthdaysInMonth = students.filter(person => isMonthTheSame(person.dataNascimento, monthNumber));
    return birthdaysInMonth;
}

console.log(studentsBirthdaysInMonth(students, 'Março'));
