// THE GAME OBJECT

function Game() {
  this.deck = this.shuffleDeck(this.createDeck());
}

Game.prototype.createDeck = function() {
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

Game.prototype.shuffleDeck = function(deck) {
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

Game.prototype.draw = function(deck, amount, hand, initial) {
  var cards = new Array();
  cards = deck.slice(0, amount);

  deck.splice(0, amount);

  if (!initial) {
    hand.push.apply(hand, cards);
  }

  return cards;
}

Game.prototype.playCard = function(amount, hand, index) {
  hand.splice(index, amount);
  return hand;
}

// ROOM OBJECT

function Room(name) {
  this.name = name;
  this.tables = [];
  this.players = [];
}

Room.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Room.prototype.addTable = function(table) {
  this.tables.push(table);
}

// TABLE OBJECT

function Table(tableID) {
  this.tableID = tableID;
  this.status = "available";
  this.roomName = null;
  this.players = [];
  this.deck = [];
  this.cardsOnTable = [];
  this.playerLimit = 2;
  this.gameObj = null;
}

Table.prototype.setRoomName = function(roomName) {
  this.roomName = roomName;
}

// PLAYER OBJECT

function Player(playerID) {
  this.playerID = playerID;
  this.name = "";
  this.tableID = "";
  this.hand = [];
}

Player.prototype.setName = function(name) {
  this.name = name;
}

exports.Game = Game;
exports.Room = Room;
exports.Table = Table;

// function createDeck() {
//   var suits = new Array("H", "C", "S", "D");
//   var deck = new Array();
//   var n = 52;
//   var index = n / suits.length;

//   var count = 0;
//   for (i = 0; i < suits.length; i++) {
//     for(j = 1; j <= index; j++) {
//       deck[count++] = j + suits[i];
//     }
//   }

//   return deck;
// }

// function shuffleDeck(deck) {
//   var i = deck.length, j, tempi, tempj;

//   if (i === 0) return false;

//   while(--i) {
//     j = Math.floor(Math.random() * (i + 1));
//     tempi = deck[i];
//     tempj = deck[j];
//     deck[i] = tempj;
//     deck[j] = tempi;
//   }

//   return deck;
// }

// function draw(deck, amount, hand, initial) {
//   var cards = new Array();
//   cards = deck.slice(0, amount);

//   deck.splice(0, amount);

//   if (!initial) {
//     hand.push.apply(hand, cards);
//   }

//   return cards;
// }

// function playCard(amount, hand, index) {
//   hand.splice(index, amount);
//   return hand;
// }