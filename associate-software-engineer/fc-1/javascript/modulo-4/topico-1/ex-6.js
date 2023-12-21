const closeConection = () => {
    return console.log("---Conexão fechada.");
}

const calculateYearByAgeAndBirthYear = (age, birthYear) => {
    if(age < 0) {
        throw new Error("Idade não pode ser negativa!")
    }
    if(!age) {
        throw new Error("Formato de idade inválido!");
    }
    return age + birthYear;
}

try {
    console.log(`O ano é: ${calculateYearByAgeAndBirthYear(10, 1996)}!`);
} catch (error) {
    console.error("Erro capturado:", error.message);
} finally {
    closeConection();
}
