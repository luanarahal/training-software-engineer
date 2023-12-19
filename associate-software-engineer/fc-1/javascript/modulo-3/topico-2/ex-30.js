import { students } from "./mock.js";

const verifyIfHasStudents = (students, initialAge, finalAge) => {
    const filteredStudents = listStudentsFromASpecificRange(students, initialAge, finalAge);

    if(!filteredStudents.length) {
        return "Não tem estudantes nesta faixa de idade";
    }

    return filteredStudents;
};

const listStudentsFromASpecificRange = (students, initialAge, finalAge) => {
    return students.filter(student => {
        const age = student.idade;

        if (age >= initialAge && age <= finalAge) {
            return student;
        }
    });
}

console.log(verifyIfHasStudents(students, 18, 25));
