function comparador() { 
	return Math.random() - 0.5; 
}


let numberOfCards;

while ((numberOfCards % 2) !== 0 || (numberOfCards < 4) || (numberOfCards > 14)) {
    numberOfCards = Number(prompt("Com quantas cartas irá jogar?"));
}

let imgsList = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
imgsList.sort(comparador);

let imgsChosen = [];
for(let i = 0; i < numberOfCards/2; i++) {
    imgsChosen.push(imgsList[i]);
    imgsChosen.push(imgsList[i]);
}

imgsChosen.sort(comparador);


for (let i = 0; i < imgsChosen.length; i++) {
    let cards = document.querySelector(".cards");
    cards.innerHTML += `<div class="card"><div class="front-face face" onclick="turnCard(this)"><img src="imagens/front.png"></div><div class="back-face face"><img src="imagens/${imgsChosen[i]}.gif"></div></div>`;
}

function turnCard (element) {

    element.classList.add("turn-front-face");
    element.nextElementSibling.classList.add("turn-back-face");


}






















