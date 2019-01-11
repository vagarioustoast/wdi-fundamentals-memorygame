console.log("Up and running.");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let checkForMatch = () => {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert(`You found a match!`);
    } else {
      alert(`Sorry, try again.`);
    }
  }
};

let flipCard = cardId => {
  cardsInPlay.push(cards[cardId]);
  console.log(`User flipped ${cards[cardId]}.`);
  checkForMatch();
};

flipCard(0);
flipCard(1);
