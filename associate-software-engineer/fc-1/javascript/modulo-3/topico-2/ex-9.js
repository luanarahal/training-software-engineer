function calculateArea(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
        return `Números inválidos!`
    }
    let area = base * height;
    return area;
}

console.log(calculateArea(5, 10));
