module.export = class Hand {
  constructor(...cards) {
    if (cards.length !== 5) {
      throw new Error('a hand must be 5 cards');

    }
    //convert from to strings to card if needed
    //(allaw strings on the form ♥9)
    for (let i = 0; i < 5; i++) {
      if (typeof cards[i] === 'string') {
        cards[i] = new Card(cards[i][0], cards[i][1]);
      }
    }
    for (let card of cards) {
      if (!(card instanceof Card)) {
        throw new Error('a non card found in your hand');
      }
    }

    this.cards = cards;
  }
}