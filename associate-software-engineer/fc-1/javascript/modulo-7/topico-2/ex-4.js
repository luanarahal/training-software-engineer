const checkEmptyField = (emailInput, error) => {
    const emailBox = document.getElementById(emailInput);
    const errorMessage = document.getElementById(error);
    if (emailBox.value == '') {
        return errorMessage.innerHTML = "Digite um e-mail!";
    }
}

document.getElementById("checkEmail").addEventListener('click', () => {
    checkEmptyField("emailInput", "error")
});
