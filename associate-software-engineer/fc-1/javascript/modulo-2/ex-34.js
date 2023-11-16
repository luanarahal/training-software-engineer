import { students } from "./mock.js";

const findYoungest = (acc, student) => {
    return (acc.idade < student.idade) ? acc : student;
};

const studentsAbove20 = students.filter(student => student.idade > 20);
  
if (studentsAbove20.length > 0) {
    const youngestStudentAbove20 = studentsAbove20.reduce(findYoungest);
    console.log(`O estudante mais jovem com idade acima de 20 é ${youngestStudentAbove20.nome} com ${youngestStudentAbove20.idade} anos.`);
} else {
    console.log("Não há estudantes com idade acima de 20.");
}
