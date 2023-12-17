import { students } from "./mock.js";

const listStudentsFromASpecificRange = (students, initialAge, finalAge) => {
    const studentsRange = students.filter(student => {
        const age = student.idade;

        if (age > initialAge && age < finalAge) {
            return student;
        }
    });

    if(studentsRange.length === 0) {
        return "Não tem estudantes nesta faixa de idade";
    }

    return studentsRange;
}

console.log(listStudentsFromASpecificRange(students, 18, 25));
