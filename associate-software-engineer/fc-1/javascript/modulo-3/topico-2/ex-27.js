import { students } from "./mock.js";

function getMonthNumber(monthName) { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName) + 1;
}

function verifyMonth (birthDate, monthNumber) {
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    return month === monthNumber;
}

const borninJuly = (students, monthName) => {
    const monthNumber = getMonthNumber(monthName);
    return students.filter(student => verifyMonth(student.dataNascimento, monthNumber))
}
console.log(borninJuly(students, "Maio"));
