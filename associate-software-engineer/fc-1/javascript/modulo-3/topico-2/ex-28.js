import { students } from "./mock.js";

function getMonthNumber(monthName) { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName) + 1;
}

function averageAge(students, monthName) {
    const monthNumber = getMonthNumber(monthName);

    const filteredStudents = students
    .filter((student) => {
        const birthDate = new Date(student.dataNascimento);
        const month = birthDate.getMonth() + 1;
        return month === monthNumber;
    })

    if(filteredStudents.length === 0) {
        return `Não tem nenhum estudante que nasceu neste mês, portanto não é possível fazer a média.`;
    }

    const sumAges = filteredStudents
        .reduce((total, student) => total + student.idade, 0);

    return sumAges / filteredStudents.length;
}

console.log(averageAge(students, "Janeiro"));
