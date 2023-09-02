const age1 = 10;
const age2 = 20;

const compareAges = (age1, age2) => {
    if (age1 > age2) {
        return "A idade1 é maior que a idade2";
    } else if (age2 > age1) {
        return "A idade2 é maior que a idade1";
    } else {
        return "As idades são iguais";
    }
}

console.log(compareAges(age1, age2));
