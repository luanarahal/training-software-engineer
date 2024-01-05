const findUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nome: "Luana",
                cpf: "340.121.088-24"
            });
        }, 2000);
    });
};

const findUserDetails = (user) => {
    return new Promise((resolve) => {
        setTimeout(() =>
            resolve(`Detalhes do usuário para ID ${user.id}: ${JSON.stringify(user, null, 2)}`), 3000);
    });
};

findUser()
    .then(user => findUserDetails(user))
    .then(details => console.log(details))
    .catch(err => console.error("Error: ", err));
