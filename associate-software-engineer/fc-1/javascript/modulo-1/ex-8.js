const book = {
    name: "Anne Frank",
    color: "brown",
    pages: 100
}

let numberOfProperties = 0;
for (const _ in book) {
    numberOfProperties++;
}
console.log(numberOfProperties);
