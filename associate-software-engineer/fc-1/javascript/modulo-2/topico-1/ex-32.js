import { students } from "./mock.js";

const checkStudentsOfTheSameAge = (currentStudent, index, students) => {
    return students
        .filter(student => student.idade === currentStudent.idade).length > 1;
}
const haveStudentsWithSameAge = students.some(checkStudentsOfTheSameAge);

console.log(haveStudentsWithSameAge);
