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

let turnedCards = [];

function turnCard (element) {

    if (turnedCards.length === 0 || turnedCards.length === 1) {

        element.classList.add("turn-front-face");
        element.nextElementSibling.classList.add("turn-back-face");

        turnedCards = document.querySelectorAll(".turn-back-face img");
        let firstOfPair = turnedCards[0].src;

        if (turnedCards.length > 1) {
            let secondOfPair = turnedCards[1].src;

            if (firstOfPair === secondOfPair) {
                console.log("YEAH!");

            } else {
                setTimeout(turnCardBack, 1000);
            }
        }
        

    }


}


function turnCardBack () {

    for (let i = 0; i < 2; i++) {
        let backFace = document.querySelector(".turn-back-face");
        backFace.classList.remove("turn-back-face");
        let frontFace = document.querySelector(".turn-front-face");
        frontFace.classList.remove("turn-front-face");
    }
}

























