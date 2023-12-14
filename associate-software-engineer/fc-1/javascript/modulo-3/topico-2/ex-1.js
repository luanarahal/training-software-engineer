function criarUsuario(nome, idade = 18) {
    return `O usuário foi criado! Nome: ${nome} -> Idade: ${idade}`;
}

console.log(criarUsuario("Luana"));
