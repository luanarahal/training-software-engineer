import { students } from "./mock.js";

function getMonthNumber(monthName) { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName) + 1;
}

function verifyMonth(dateStringToDate, monthNumber) {
    const dateString = new Date(dateStringToDate);
    const extractMonth = dateString.getMonth() + 1;
    return extractMonth === monthNumber;
}

function studentsBirthdaysInMonth(students, monthName) {
    const monthNumber = getMonthNumber(monthName);
    const birthdaysInMonth = students.filter(person => verifyMonth(person.dataNascimento, monthNumber));
    return birthdaysInMonth;
}

console.log(studentsBirthdaysInMonth(students, 'Março'));
