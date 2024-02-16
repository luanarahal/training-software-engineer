const countNumber = (clickCounter) => {
    const numberElement = document.getElementById(clickCounter);
    let number = parseInt(numberElement.textContent);
    number++;
    numberElement.textContent = number;
}

document.getElementById("countNumber").addEventListener('click', () => {
    countNumber("clickCounter")
});
