import { students } from "./mock.js";

function getMonthNumber(monthName) { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName) + 1;
}

const borninJuly = (students, monthName) => {
    const monthNumber = getMonthNumber(monthName);
    return students.filter(student => {
        const birthDate = new Date(student.dataNascimento);
        const month = birthDate.getMonth() + 1;
        return month === monthNumber;
    })
}
console.log(borninJuly(students, "Julho"));
