const CompareHands = require('./CompareHands');
const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');

let aHand = new Hand('♦T', '♥J', '♣Q', '♠K');
console.log(CompareHands.isFlush(aHand));

/* ♦♥♣♠

/*let deck = new DeckOfCards();
console.log('random hand: ')
let randomHand = deck.dealHand();

console.log(deck.dealHand);
console.log('a hand with a flush');
let flushHand = new Hand('♦T', '♦J', '♦Q', '♦K', '♦A');
console.log(flushHand);