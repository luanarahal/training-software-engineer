function classifyProduct(amount) {
    if (amount < 10) {
        return `O produto está acabando!`;
    } else if (amount >= 10) {
        return `Quantidade OK`;
    }
}

console.log(classifyProduct(5));
