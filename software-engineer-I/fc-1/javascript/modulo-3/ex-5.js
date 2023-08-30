const age = 20;

const isEligibleToVote = (age) => {
    if (age >= 18) {
        return "Você é elegível para votar";
    } else {
        return "Você não é elegível para votar";
    }
}

console.log(isEligibleToVote(age));
