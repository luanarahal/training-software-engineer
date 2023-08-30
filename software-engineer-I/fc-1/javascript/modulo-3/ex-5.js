const age = 20;

const checkEligibility = (age) => {
    if (age >= 18) {
        return "Você é elegível para votar";
    } else {
        return "Você não é elegível para votar";
    }
}

console.log(checkEligibility(age));
