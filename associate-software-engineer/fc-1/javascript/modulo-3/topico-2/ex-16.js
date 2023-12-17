import { students } from "./mock.js";

function getRange(age) {
    let ageRange;
    if (age > 0 && age <= 12) {
        ageRange = '0-12';
    } else if (age > 12 && age <= 18) {
        ageRange = '12-18';
    } else if (age > 18 && age <= 30) {
        ageRange = '18-30';
    } else {
        ageRange = '> 30';
    }
    return ageRange;
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
