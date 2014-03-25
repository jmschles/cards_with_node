function createDeck() {
  var suits = new Array("H", "C", "S", "D");
  var deck = new Array();
  var n = 52;
  var index = n / suits.length;

  var count = 0;
  for (i = 0; i < suits.length; i++) {
    for(j = 1; j <= index; j++) {
      deck[count++] = j + suits[i];
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  var i = deck.length, j, tempi, tempj;

  if (i === 0) return false;

  while(--i) {
    j = Math.floor(Math.random() * (i + 1));
    tempi = deck[i];
    tempj = deck[j];
    deck[i] = tempj;
    deck[j] = tempi;
  }

  return deck;
}

function draw(deck, amount, hand, initial) {
  var cards = new Array();
  cards = deck.slice(0, amount);

  deck.splice(0, amount);

  if (!initial) {
    hand.push.apply(hand, cards);
  }

  return cards;
}

function playCard(amount, hand, index) {
  hand.splice(index, amount);
  return hand;
}

exports.createDeck = createDeck;
exports.shuffleDeck = shuffleDeck;
exports.draw = draw;
exports.playCard = playCard;