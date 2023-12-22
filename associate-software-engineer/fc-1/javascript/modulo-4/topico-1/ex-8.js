function getMonthNumber(monthName, monthNames) {
    return monthNames.indexOf(monthName) + 1;
};

try {
    const month = "Dezembro";

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

    if (typeof month !== 'string' || !month || !monthNames.includes(month)) {
        throw new Error("Mês digitado inválido!");
    }

    console.log(getMonthNumber(month, monthNames));
} catch (error) {
    console.error(error.message);
}
