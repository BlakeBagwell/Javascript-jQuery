function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  if (this.point === 11){
    return 'images/jack_of_' + this.suit + '.png';
  }
  if (this.point === 12){
    return 'images/queen_of_' + this.suit + '.png';
  }
  if (this.point === 13){
    return 'images/king_of_' + this.suit + '.png';
  }
  if (this.point === 1){
    return 'images/ace_of_' + this.suit + '.png';
  }
    return 'images/' + this.point + '_of_' + this.suit + '.png';
};

function Hand(){
  this.hand = [];
}

Hand.prototype.addCard = function(card) {
  this.hand.push(card);
};

Hand.prototype.getPoints = function () {
  var pointTotal = 0;
  return this.hand.reduce(function(a, b) {
    return a.point + b.point;
  });
};

function Deck() {
  this.deck = [];
  
}

Deck.prototype.draw() {

}

Deck.protoype.shuffle() {

}

var newDeck = new Deck();

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));


console.log(myHand.getPoints());
