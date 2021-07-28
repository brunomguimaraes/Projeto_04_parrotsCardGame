function comparador() { 
	return Math.random() - 0.5; 
}


let numberOfCards;

while ((numberOfCards % 2) !== 0 || (numberOfCards < 4) || (numberOfCards > 14)) {
    numberOfCards = prompt("Com quantas cartas irá jogar?");
}



let cardsList = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14"];
cardsList.sort(comparador);

let counter = 0;

while(counter < numberOfCards) {

    let usingCard = document.querySelector(`.cards .hidden.${cardsList[counter]}`);
    usingCard.classList.remove("hidden");

    counter++;

}












