var gamefile = require("./game");

// Game tests

// var game = new gamefile.Game();
// var deck = game.createDeck();  
// var myDeck = game.shuffleDeck(deck);  
// console.log("Size of pack before draw: " + myDeck.length);  
// console.log("Drawing 5 cards.");  
// var hand = game.draw(myDeck, 5, '', true);  
// console.log("Size of pack after draw: " + myDeck.length);  
// console.log("Cards in hand:");  
// console.log(hand);  
// console.log();  
// console.log("Now I'll draw a card");  
// var draw = game.draw(myDeck, 1, hand, false);  
// console.log(draw);  
// console.log("Size of pack after drawing one card: " + myDeck.length);  
// console.log("So all cards in my hand are: ");  
// console.log(hand);  
// //////
// console.log();  
// console.log("Now I'll draw 3 cards");  
// var draw = game.draw(myDeck, 3, hand, false);  
// console.log(draw);  
// console.log("Size of pack after drawing 3 cards: " + myDeck.length);  
// console.log("So all cards in my hand are: ");  
// console.log(hand);  
// console.log();  
// console.log("I'll play one card now, dropping the last card.");  
// console.log()  
// var lastCard = hand.length-1;  
// console.log("Last card's index: " + lastCard);  
// var newHand = game.playCard(1, hand, lastCard);  
// console.log("Cards in my new hand are:");  
// console.log(newHand);  
// console.log();  
// console.log("I'll play the third card:");  
// var thirdCard = 2; //index of 3rd card is 2  
// console.log("Index of the third card: " + thirdCard);  
// var evenNewerHand = game.playCard(1, newHand, thirdCard);  
// console.log("Cards now in my hand hand are:");  
// console.log(evenNewerHand);  
// console.log();  
// console.log("Size of pack should not change: " + myDeck.length);

// Room/Table tests

var room = new gamefile.Room("Test Room");
var table = new gamefile.Table(1);
table.setRoomName("Test Room");
room.tables.push(table);
var game = new gamefile.Game();
table.gameObj = game;
table.deck = game.deck;
console.log(room);