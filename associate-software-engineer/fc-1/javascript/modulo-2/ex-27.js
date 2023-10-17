import { students } from "./mock.js";

const orderByAgeDescending = students.sort((student1, student2) => {
    if (student1.idade > student2.idade) {
        return -1;
    } else {
        return true;
    }
});

console.log(orderByAgeDescending);
