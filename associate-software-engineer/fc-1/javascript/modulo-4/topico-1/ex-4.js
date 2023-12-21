try {
    const name = undefined;

    const surname = name.sobrenome;
} catch (error) {
    if (error instanceof TypeError) {
        console.error("TypeError capturado: " + error.message);
    }
}
