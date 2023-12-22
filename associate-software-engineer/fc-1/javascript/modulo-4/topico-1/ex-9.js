const calculateArea = (base, height) => {
    if (!base || !height) {
        throw new Error("Entrada inválida, favor atribuir números para base e altura!")
    }

    if(typeof base !== 'number' || typeof height !== 'number') {
        throw new Error("Digite números para base e altura!");
    }

    if(base <= 0 || height <= 0) {
        throw new Error("Digite números positivos para fazer o cálculo da área!")
    }
    
    return `A área do retângulo é: ${base * height} m2`;
};

try {    
    console.log(calculateArea(10, 5));
} catch (error) {
    console.error(error.message);
}
