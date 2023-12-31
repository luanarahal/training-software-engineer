const keys = ['chave1', 'chave2', 'chave3'];
const values = ['valor1', 'valor2', 'valor3'];

const arraysToMap = (keys, values) => {
    if (keys.length !== values.length) {
        throw new Error('Os arrays tem comprimentos diferentes, então não é possível relacioná-los');
    }
    const newMap = new Map();
    let index = 0;
    for (const key of keys) {
        newMap.set(key, values[index]);
        index++;
    }
    return newMap;
}

const relatingKeysAndValues = arraysToMap(keys, values);
console.log(relatingKeysAndValues);
