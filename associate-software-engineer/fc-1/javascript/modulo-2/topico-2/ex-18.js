const produtos = [
    { id: 'p1', nome: 'Caneta', preco: 1.50 },
    { id: 'p2', nome: 'Lápis', preco: 0.80 }
];

const products = new Map();

produtos.forEach(product => {
    products.set(product.id, product);
});

console.log(products);
