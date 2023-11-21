const map1 = new Map([['chave1', 'valor1']]);
const map2 = new Map([['chave2', 'valor2']]);

const newMap = new Map([...map1, ...map2]);

console.log(newMap);
