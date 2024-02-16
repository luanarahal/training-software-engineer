const countNumber = (clickCounterNode) => {
    let number = parseInt(clickCounterNode.textContent) + 1;
    clickCounterNode.textContent = number;
}

document.getElementById("countNumber").addEventListener('click', () => {
    const clickCounterNode = document.getElementById("clickCounter");
    countNumber(clickCounterNode);
});
