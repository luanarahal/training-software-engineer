import { students } from "./mock.js";

students.map((student) => {
    return console.log(`${student.nome} - ${student.idade}`);
});
