const countNumber = () => {
    const numberElement = document.getElementById("clickCounter");
    let number = parseInt(numberElement.textContent);
    number++;
    numberElement.textContent = number;
    console.log(number);
}

document.getElementById("countNumber").addEventListener('click', countNumber);
