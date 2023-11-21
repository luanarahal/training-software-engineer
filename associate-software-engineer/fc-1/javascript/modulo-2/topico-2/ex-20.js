const keys = ['chave1', 'chave2', 'chave3'];
const values = ['valor1', 'valor2', 'valor3'];

function arraysToMap(index) {
    const newMap = new Map();

    if (keys.length === values.length) {
        for (index in keys) {
            newMap.set(keys[index], values[index]);
        }
    } else {
        console.log('Os arrays tem comprimentos diferentes, então não é possível relacioná-los');
    }
    return newMap;
}

const relatingKeysAndValues = arraysToMap(keys, values);
console.log(relatingKeysAndValues);
