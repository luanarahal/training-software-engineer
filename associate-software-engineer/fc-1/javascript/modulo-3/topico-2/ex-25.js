import { students } from "./mock.js";

const howManyDaysUntilBirthday = students
    .map(student => {
        const currentDate = new Date();
        const birthDate = new Date(student.dataNascimento);
        const day = birthDate.getDate() + 1 ;
        const month = birthDate.getMonth();
        const year = currentDate.getFullYear() + 1;

        const nextBirthday = new Date(year, month, day);
        const daysToBirthday = (nextBirthday - currentDate) / 1000 / 60 / 60 / 24;

        return Math.floor(daysToBirthday);
    });

console.log(howManyDaysUntilBirthday);
