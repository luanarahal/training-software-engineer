const closeConection = () => {
    return console.log("---Conexão fechada.");
}

const openConection = () => {
    return console.log("Conexão aberta---")
}

const calculateYearByAgeAndBirthYear = (age, birthYear) => {
    if(!age || age < 0) {
        throw new Error("Formato de idade inválido!");
    }
    return age + birthYear;
}

try {
    openConection();
    console.log(`O ano é: ${calculateYearByAgeAndBirthYear(-10, 1996)}!`);
} catch (error) {
    console.error("Erro capturado:", error.message);
} finally {
    closeConection();
}
