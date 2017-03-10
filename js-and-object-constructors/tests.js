

describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });
});

describe ('Hand', function (){

  it('Hand constructor can add cards to itself with addCard method', function() {
    var myHand = new Hand();
    var card = new Card(2, 'diamonds');
    myHand.addCard(card);
  });

  it('Get points should return 10 for all face cards', function() {
    var myHand = new Hand();
    var card = new Card(11, 'diamonds');
    var card1 = new Card(12, 'diamonds');
    myHand.addCard(card);
    myHand.addCard(card1);
    expect(myHand.getPoints()).toEqual(20);
  });
  it('Ace will equal its maximum beneficial value, or default to 1 if the hand total exceeds 21', function() {
    var myHand = new Hand();
    var card = new Card(1, 'diamonds');
    var card1 = new Card(12, 'diamonds');
    var card2 = new Card(12, 'diamonds');
    myHand.addCard(card);
    myHand.addCard(card1);
    myHand.addCard(card2);
    expect(myHand.getPoints()).toEqual(21);
  });

});

describe ('Deck', function() {
  it('Deck of 52 cards', function() {
    var myDeck = new Deck();
    expect(myDeck.deck.length).toEqual(52);
  });

  it('Shuffle should generally not return cards in the same order', function() {
    var myDeck = new Deck();

    var shuffshuff = myDeck.sDeck();
    var shuffshuff2 = myDeck.sDeck();
    expect(shuffshuff[0]).not.toEqual(shuffshuff2[0]);
  });
});
