const emitLog = (type, message, details) => {
    if (type === "info") {
        console.log(`${type} -> ${message} -> `, details);
    } else if (type === "error") {
        console.error(`${type} -> ${message} ->`, details);
    } else {
        throw new Error(`O tipo do erro precisa ser info ou error.`);
    }
}

try {
    emitLog("info", "Mensagem de info", { "Detalhes de info": "123" });
    emitLog("error", "Mensagem de error", { "Detalhes do erro": "456" });
} catch (error) {
    console.error("Erro capturado: " + error.message);
}

