import { students } from "./mock.js";

function getRange(age) {
    if(age < 0) {
        return `Não aceitamos idade negativa`;
    }

    if (age > 0 && age <= 12) {
        return '0-12';
    } else if (age > 12 && age <= 18) {
        return '12-18';
    } else if (age > 18 && age <= 30) {
        return '18-30';
    } else {
        return '> 30';
    }
}

function orderStudentsByAgeGroup(students) {
    return students
        .reduce((total, student) => {
            const age = student.idade;
            let ageRange = getRange(age);
            
            if (!total[ageRange]) {
                total[ageRange] = [];
            }

            total[ageRange].push(student);

            return total;
        }, {})
}

console.log(orderStudentsByAgeGroup(students));
