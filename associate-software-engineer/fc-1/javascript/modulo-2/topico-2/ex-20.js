const chaves = ['chave1', 'chave2', 'chave3'];
const valores = ['valor1', 'valor2', 'valor3'];

function arraysToMap(arrays) {
    const newMap = new Map();

    if (chaves.length === valores.length) {
        for (arrays in chaves) {
            newMap.set(chaves[arrays], valores[arrays]);
        }
    } else {
        console.log('Os arrays tem comprimentos diferentes, então não é possível relacioná-los');
    }
    return newMap;
}

const relatingKeysAndValues = arraysToMap(chaves, valores);
console.log(relatingKeysAndValues);
