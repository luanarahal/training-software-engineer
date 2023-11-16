const book = {
    title: "Diário de Anne Frank",
    author: "Anne Frank",
    year: 1947
}

for (let key in book) {
    console.log(`${key} -> ${book[key]}`);
}
