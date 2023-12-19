import { students } from "./mock.js";
import { calculateAge } from "./utils.date.js";

students.forEach(person => {
    person.idade2 = calculateAge(person.dataNascimento);
});

console.log(students);
