const address = {
    streetAddress: "Rockefeller Plaza",
    number: 45,
    city: "New York",
    country: "EUA"
}

function printAddress(address) {
    for (let item in address) {
        console.log(`${item} -> ${address[item]}`);
    }
}

printAddress(address);
