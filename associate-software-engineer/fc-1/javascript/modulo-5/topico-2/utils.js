const validateRange = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        throw new Error('Insira parâmetros válidos');
    }
    if (min === max) {
        throw new Error('Digite parâmetros diferentes');
    }
};

export const generateRandomNumber = (min, max, precision) => {
    validateRange(min, max);

    if (precision) {
        return genRandomDecimal(min, max, precision);
    } else {
        return genRandomInteger(min, max);
    }
};

const genRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const genRandomDecimal = (min, max, precision) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};
