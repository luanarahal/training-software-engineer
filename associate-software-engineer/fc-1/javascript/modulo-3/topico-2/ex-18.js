import { students } from "./mock.js";

function getMonthNumber(monthName) { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName) + 1;
}

function studentsBirthdaysInMonth(students, monthName) {
    const monthNumber = getMonthNumber(monthName);

    const birthdaysInMonth = students.filter(person => {
        const dateStringToDate = new Date(person.dataNascimento);
        const extractMonth = dateStringToDate.getMonth() + 1;
        return extractMonth === monthNumber;
    });
    return birthdaysInMonth;
}

console.log(studentsBirthdaysInMonth(students, 'Março'));
