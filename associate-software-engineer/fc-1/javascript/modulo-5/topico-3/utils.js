const validateRange = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        throw new Error('Insira parâmetros válidos');
    }
    if (min === max) {
        throw new Error('Digite parâmetros diferentes');
    }
};

const genRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const genRandomDecimal = (min, max, precision) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

const validatePrecision = (precision) => {
    if (isNaN(precision) || precision <= 0) {
        throw new Error('Digite um parâmetro de precisão válido');
    }
}

export const generateRandomNumber = (min, max, precision) => {
    validateRange(min, max);

    if (precision) {
        validatePrecision(precision);

        return genRandomDecimal(min, max, precision);
    } else {
        return genRandomInteger(min, max);
    }
};
