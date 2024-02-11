const verifyEmail = () => {
    const emailBox = document.getElementById("emailInput");
    const error = document.getElementById("errorText");
    if (emailBox.value == '') {
        error.innerHTML = "Digite um e-mail!";
    } else {
        error.innerHTML = "Cadastrado!";
    }
}

document.getElementById("checkEmail").addEventListener('click', verifyEmail);
