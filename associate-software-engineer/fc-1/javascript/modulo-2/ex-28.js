import { students } from "./mock.js";

students.map((student) => {
    console.log(`${student.nome} - ${student.idade}`);
});
