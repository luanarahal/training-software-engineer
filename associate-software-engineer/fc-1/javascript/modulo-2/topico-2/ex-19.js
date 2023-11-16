const palavras = ['gato', 'cachorro', 'gato', 'pássaro'];

const words = new Map();

const contando = palavras.forEach(word => {
    if (words.has(word)) {
        words.set(word, words.get(word) + 1)
    } else {
        words.set(word, 1);
    }
})

console.log(words);
