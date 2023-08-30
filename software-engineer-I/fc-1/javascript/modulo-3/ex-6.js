const validUser = true;
const validPassword = true;

const validateCredential = (validUser, validPassword) => {
    if (validUser && validPassword) {
        return "Autenticado com sucesso";
    } else {
        return "Não autenticado";
    }
}

console.log(validateCredential(validUser, validPassword));
