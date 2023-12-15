function calculateArea(base, height) {
    if (!base || !height) {
        return `Digite números!`;
    }
    if (typeof base !== 'number' || typeof height !== 'number') {
        return `Dados inválidos!`
    }

    return base * height;
}

console.log(calculateArea("Luana", "Adriano"));
