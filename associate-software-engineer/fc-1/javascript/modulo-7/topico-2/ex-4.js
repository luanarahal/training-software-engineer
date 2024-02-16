const checkEmptyField = (emailInput, message) => {
    const errorMessage = document.getElementById("error");
    if (emailInput.value == '') {
        errorMessage.innerHTML = message;
    }
}

document.getElementById("checkEmail").addEventListener('click', () => {
    const emaiInputHTML = document.getElementById("emailInput");
    checkEmptyField(emaiInputHTML, "Digite um e-mail!");
});
