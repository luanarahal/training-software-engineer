const products = [
    { id: 'p1', nome: 'Caneta', preco: 1.50 },
    { id: 'p2', nome: 'Lápis', preco: 0.80 }
];

const productMap = new Map();

products.forEach(product => {
    productMap.set(product.id, product);
});

console.log(productMap);
