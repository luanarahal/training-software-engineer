//Exercício 1
const title = document.getElementById("title");
title.textContent = "A Luana não é só linda, como ela é maravilhosa!!!";

//Exercício 2
const paragraphs = document.getElementsByTagName("p");
for (let paragraph of paragraphs) {
    paragraph.style.color = "#D35A93";
};

//Exercício 3
const highlights = document.getElementsByClassName("emphasis")[0];
highlights.style.backgroundColor = "pink";

//Exercício 4
const items = document.querySelector(".item");
items.textContent = "Pode discordar, mas é a realidade!";

//Exercício 5
const links = document.querySelectorAll("a.link");
for (let link of links) {
    link.setAttribute("target", "_blank");
}

//Exercício 6
const button = document.getElementById("button");
button.textContent = "Não pressione aqui!"

//Exercício 7
const items2 = document.querySelectorAll(".item");
for (let item of items2) {
    item.style.backgroundColor = "#A0144F";
}

//Exercício 8
const highlights2 = document.getElementsByClassName("emphasis");
for (let emphase of highlights2) {
    emphase.innerText = "Texto alterado!";
}
console.log(empha);

//Exercício 9
const periods = document.getElementsByTagName("span");
for (let period of periods) {
    period.style.fontStyle = 'italic';
}