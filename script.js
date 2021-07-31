// Cards Selection

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

// Cards Turning - Memory Game

let turnedCards = [];
let teste1;
let counter = 0;

function turnCard (element) {
    
    if (turnedCards.length === 0 || turnedCards.length === 1) {
        
        element.classList.add("turn-front-face");
        element.nextElementSibling.classList.add("turn-back-face");
        counter++;
        turnedCards = document.querySelectorAll(".turn-back-face img");

        if (turnedCards.length === 2) {
            
            if (turnedCards[0].src === turnedCards[1].src) {
    
                let teste1 = element.nextElementSibling.firstChild.src;
                let allImages = document.getElementsByTagName("img");
                for(let i = 0; i < allImages.length; i++) {
                    if (allImages[i].src === teste1) {
                        allImages[i].parentNode.classList.replace("turn-back-face", "pair-back");
                        allImages[i].parentNode.previousElementSibling.classList.replace("turn-front-face", "pair-front");
                    }
                }
                setTimeout(gameFinished, 200);
                turnedCards = [];
                
            } else {

                setTimeout(turnCardBack, 1000);

            }

        } 
            
    }
  
} 

function turnCardBack () {

    for (let i = 0; i < 2; i++) {
        let backFace = document.querySelector(".turn-back-face");
        if (backFace !== null) {
            backFace.classList.remove("turn-back-face");
            backFace.previousElementSibling.classList.remove("turn-front-face");
        }
    }

    turnedCards = [];
}

function gameFinished () {
    let testando = document.querySelectorAll(".pair-front");
    if (testando.length === numberOfCards) {
        alert(`Você ganhou em ${counter} jogadas!`);
    }
}


/*
document.querySelector('[src*="https://www.google.com""]')
 SUBSTITUIR O HTML NO DOM


let turnedCards = [];
let firstOfPair;
let secondOfPair;
let counter = 0;
let teste1;

function turnCard (element) {
    
    if (turnedCards.length === 0 || turnedCards.length === 1) {
        
        element.classList.add("turn-front-face");
        element.nextElementSibling.classList.add("turn-back-face");

        turnedCards = document.querySelectorAll(".turn-back-face:not(.pair) img");

        if (turnedCards.length === 2) {
            
            if (turnedCards[0].src === turnedCards[1].src) {
                //element.classList.add("pair");
                //element.nextElementSibling.classList.add("pair");
                let teste1 = element.nextElementSibling.firstChild.src;
                let allImages = document.getElementsByTagName("img");
                for(let i = 0; i < allImages.length; i++) {
                    if (allImages[i].src === teste1) {
                        allImages[i].parentNode.classList.add("pair");
                        allImages[i].parentNode.previousElementSibling.classList.add("pair");
                    }
                }
                
                turnedCards = [];
                
            } else {

                for (let i = 0; i < 2; i++) {
                    let algo = document.querySelector(".pair")

                    if(algo !== null){
                        algo.classList.remove("pair");
                        algo.nextElementSibling.classList.remove("pair");
                    }
                }

                setTimeout(turnCardBack, 1000);

            }

        } 
            
    }
  
} 

function turnCardBack () {

    for (let i = 0; i < 2; i++) {
        let backFace = document.querySelector(".turn-back-face:not(.pair)");
        if (backFace !== null) {
            backFace.classList.remove("turn-back-face");
            backFace.previousElementSibling.classList.remove("turn-front-face");
        }
    }

    turnedCards = [];
}
*/

















