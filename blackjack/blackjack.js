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

Hand.prototype.getPoints = function() {
  // sorts aces to bottom, since thier points are flexible.
  var sortedHand = this.hand.sort(function(a, b) {
    return b.point - a.point;
  });

  return sortedHand.reduce(function(a, b) {
    if (b.point <= 10 && b.point > 1) {//cards 2-10
      return a + b.point;
    }
    else if (b.point > 10) {//facecards
      return a + 10;
    }
    else {
      if (11 + a <= 21) {//aces
        return a + 11;
        }
      else {
        return a + 1;
      }
    }
  }, 0);
};

function Deck() {
  this.deck = [];
  var suits = ['diamonds', 'hearts', 'spades', 'clubs'];
  for (var i = 1; i < 14; i++) {
    for (var j = 0; j < 4; j++) {
      newCard = new Card(i, suits[j]);
      this.deck.push(newCard);
    }
  }
}

Deck.prototype.sDeck = function(){
  this.deck = _.shuffle(this.deck);
};

Deck.prototype.draw = function(){
  return this.deck.pop();
};


// function getCardImageUrl(card) {
//   if (card.point === 1) {
//     return 'images/ace_of_' + card.suit + '.png';
//   }
//   else if (card.point === 11) {
//     return 'images/jack_of_' + card.suit + '.png';
//   }
//   else if (card.point === 12) {
//     return 'images/queen_of_' + card.suit + '.png';
//   }
//   else if (card.point === 13) {
//     return 'images/king_of_' + card.suit + '.png';
//   }
//   else {
//   return 'images/' + card.point + '_of_' + card.suit + '.png';
//   }
// }
//
// function calculatePoints(cards) {
// var total = 0;
// var sortedCards = cards.sort(function(a, b) {
//   return b.point - a.point;
// });
//
//   for (var i = 0; i < cards.length; i++){
//     if (sortedCards[i].point >= 10) {
//       total = total + 10;
//     }
//     else if (sortedCards[i].point === 1) {
//       if (total <= 10) {
//         total += 11;
//       }
//       else {
//         total += 1;
//       }
//     }
//     else {
//       total = total + sortedCards[i].point;
//     }
//
//   }
//     return total;
//     // return card.point;
// }
//
// var newDeck = function(){
//
//   var deck = [];
//   var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
//   for (var j = 1; j < 14; j++) {
//     for (var i = 0; i < 4; i++) {
//       deck.push({point: j, suit: suits[i]});
//     }
//   }
//   return deck;
// };
