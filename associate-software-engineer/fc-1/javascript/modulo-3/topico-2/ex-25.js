import { students } from "./mock.js";

const formattedDate = (birthDate, currentDate) => {
    const dateBirth = new Date(birthDate);
    const day = dateBirth.getDate() + 1 ;
    const month = dateBirth.getMonth();
    const year = currentDate.getFullYear() + 1;

    const nextBirthday = new Date(year, month, day);
    return nextBirthday;
}

const howManyDaysUntilBirthday = (students) => {
    return students.map(student => {
        const currentDate = new Date();
        const date = formattedDate(student.dataNascimento, currentDate);
        const daysToBirthday = (date - currentDate) / 1000 / 60 / 60 / 24;

        return Math.floor(daysToBirthday);
    });
}

console.log(howManyDaysUntilBirthday(students));
