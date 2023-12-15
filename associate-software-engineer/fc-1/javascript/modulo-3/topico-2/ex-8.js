function classifyProduct(amount) {
    if (amount < 10) {
        return `O produto está acabando!`;
    } 
    return `Quantidade OK`;
}

console.log(classifyProduct(55));
