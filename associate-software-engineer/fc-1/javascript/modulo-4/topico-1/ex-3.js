try {
    const validateEmail = (email) => {
        const emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (emailPattern.test(email)) {
            return "E-mail cadastrado com sucesso!";
        }
        return error; 
    }
    console.log(validateEmail('luanarahal'));
} catch (error) {
    console.error("Formato de e-mail inválido!")
}
