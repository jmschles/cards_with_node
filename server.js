var game = require('./game');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var socket = server.listen(3001);
app.set("log level", 1);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view options', { layout: false });
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res) {
  res.render('index.html');
});

var players = {};
var start = false;
var deck = game.shuffleDeck(game.createDeck());

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) { size++; }
  }
  return size;
}

io.sockets.on('connection', function(client) {
  client.on('addPlayer', function(player) {
    players[client.id] = player;
    console.log("Player " + player + " with id: " + client.id + " has connected.");
    console.log(Object.size(players));
    for(var key in players) {
      console.log("Players: " + key + ": " + players[key]);
    }
  });

  client.on('disconnect', function() {
    console.log("Player with id: " + client.id + " has disconnected.");
    delete players[client.id];
    for(var key in players) {
      console.log("Remaining players: " + key + ": " + players[key]);
    }
    //reset deck
    deck = game.shuffleDeck(game.createDeck());
  });

  client.on('dealCards', function() {
    var cards = game.draw(deck, 6, "", true);
    client.emit('showCards', cards);
    io.sockets.emit("remainingCards", deck.length);
  });

  client.on('getOpponents', function() {
    console.log("I don't know who the opponents are.");
    return false;
  });
});