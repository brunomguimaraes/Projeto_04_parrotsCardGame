// Cards Selection

function comparador() { 
	return Math.random() - 0.5; 
}

let numberOfCards;

while (((numberOfCards % 2) !== 0) || (numberOfCards < 4) || (numberOfCards > 14)) {
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

// Time counter

let seconds = 1;
function secondsCounter () {

    let timeBox = document.querySelector(".seconds");
    if (seconds > 9) {
        timeBox.innerText = `${seconds}`;
    } else {
        timeBox.innerText = `0${seconds}`;
    }
    seconds++;

    if (seconds === 60){
        seconds = 0;
    }
}

let sec = setInterval(secondsCounter, 1000);

let minutes = 1;
function minutesCounter () {

    let timeBox = document.querySelector(".minutes");
    if (minutes > 9) {
        timeBox.innerText = `${minutes}:`;
    } else {
        timeBox.innerText = `0${minutes}:`;
    }
    minutes++;
    
}

let min = setInterval(minutesCounter, 1000*60);

// Cards Turning - Memory Game

let turnedCards = [];
let imgChosen;
let counter = 0;

function turnCard (element) {
    
    if (turnedCards.length === 0 || turnedCards.length === 1) {
        
        element.classList.add("turn-front-face");
        element.nextElementSibling.classList.add("turn-back-face");
        counter++;
        turnedCards = document.querySelectorAll(".turn-back-face img");

        if (turnedCards.length === 2) {
            
            if (turnedCards[0].src === turnedCards[1].src) {
    
                let imgChosen = element.nextElementSibling.firstChild.src;
                let allImages = document.getElementsByTagName("img");
                for(let i = 0; i < allImages.length; i++) {
                    if (allImages[i].src === imgChosen) {
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

// Winning message

function gameFinished () {

    let allHits = document.querySelectorAll(".pair-front");
    if (allHits.length === numberOfCards) {
        if (minutes === 1) {
            alert(`Você ganhou em ${seconds - 1} segundo(s) com ${counter} jogadas!`);
        } else {
            alert(`Você ganhou em ${minutes - 1} minuto(s) e ${seconds - 1} segundo(s) com ${counter} jogadas!`);
        }
        let restartButton = document.querySelector(".button-container");
        restartButton.classList.remove("hide");
        clearInterval(sec);
        clearInterval(min);
    }
}

function playAgain () {
    location.reload();
}












