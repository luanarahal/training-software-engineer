function getMonthNumber(monthName) {
    if (typeof monthName !== 'string' || !monthName || !monthNames.includes(monthName)) {
        throw new Error("Mês digitado inválido!");
    }
    
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    return monthNames.indexOf(monthName) + 1;
};

try {
    console.log(getMonthNumber("Dezembro"));
} catch (error) {
    console.error(error.message);
}
