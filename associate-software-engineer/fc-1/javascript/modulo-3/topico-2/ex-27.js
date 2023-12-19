import { students } from "./mock.js";
import { getMonthNumber, isMonthTheSame } from "./utils.date.js";

const getStudentsByMonthFromBirthDate = (students, monthName) => {
    const monthNumber = getMonthNumber(monthName);
    return students.filter(student => isMonthTheSame(student.dataNascimento, monthNumber))
}
console.log(getStudentsByMonthFromBirthDate(students, "Maio"));
