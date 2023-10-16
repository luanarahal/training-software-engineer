import { estudantes } from "./ex-19.js";

const alphabeticalOrder = estudantes.sort((name1, name2) => {
    if (name1.nome > name2.nome) {
        return 1;
    } else if (name1.nome < name2.nome) {
        return -1;
    } else {
        return 0;
    }
});

console.log(alphabeticalOrder);
