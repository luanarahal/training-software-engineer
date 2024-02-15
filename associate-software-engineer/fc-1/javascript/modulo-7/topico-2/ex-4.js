const checkEmptyField = () => {
    const emailBox = document.getElementById("emailInput");
    const error = document.getElementById("error");
    if (emailBox.value == '') {
        error.innerHTML = "Digite um e-mail!";
    }
}

document.getElementById("checkEmail").addEventListener('click', checkEmptyField);
