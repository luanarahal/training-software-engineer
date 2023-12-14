function checkApproval(grade) {
    if (grade > 7) {
        return `Aprovado`;
    } else {
        return `Reprovado`;
    }
}
const grade = 4;

console.log(checkApproval(grade));
