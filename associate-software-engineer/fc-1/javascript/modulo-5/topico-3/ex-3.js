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

const main = async () => {
    const user = await findUser();
    const userDetails = await findUserDetails(user);
    console.log(userDetails);
}

main();
