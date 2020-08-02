const pilesOfCard = [];
for(let mark of ['Heart', 'Clover', 'Dia', 'Spade']){
  for(let Num = 1; Num<=13; Num++){
    pilesOfCard.push({mark, Num});
  }
}

let selectedCard = pilesOfCard.filter(Card => Card.Num ===2);
console.log(selectedCard);
selectedCard = pilesOfCard.filter(Card => Card.mark === 'Dia');
console.log(selectedCard);
selectedCard = pilesOfCard.filter(Card => Card.Num > 10);
console.log(selectedCard);
selectedCard = pilesOfCard.filter(Card => Card.Num > 10 && Card.mark === 'Heart');
console.log(selectedCard);
