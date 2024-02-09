//Exercício 1
var title = document.getElementById("title");
title.textContent = "A Luana não é só linda, como ela é maravilhosa!!!";

//Exercício 2
var paragraph = document.getElementsByTagName("p");
for (let p of paragraph) {
    p.style.color = "#D35A93";
};

//Exercício 3
var emphasis = document.getElementsByClassName("emphasis")[0];
emphasis.style.backgroundColor = "pink";

//Exercício 4
var item = document.querySelector(".item");
item.textContent = "Pode discordar, mas é a realidade!";
console.log(item);

//Exercício 5
var links = document.querySelectorAll("a.link");
for (let link of links) {
    link.setAttribute("target", "_blank");
}

//Exercício 6
var button = document.getElementById("button");
button.textContent = "Não pressione aqui!"

//Exercício 7
var itens = document.querySelectorAll(".item");
for (let item of itens) {
    item.style.backgroundColor = "#A0144F";
}

//Exercício 8
var empha = document.getElementsByClassName("emphasis");
for (let emp of empha) {
    emp.innerText = "Texto alterado!";
    console.log(emp);
}
console.log(empha);

//Exercício 9
var span = document.getElementsByTagName("span");
for (let s of span) {
    s.style.fontStyle = 'italic';
}
