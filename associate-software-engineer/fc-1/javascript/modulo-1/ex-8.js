const book = {
    name: "Anne Frank",
    color: "brown",
    pages: 100
}

let qtdProperties = 0;
for (const property in book) {
    qtdProperties++;
}
console.log(qtdProperties);
