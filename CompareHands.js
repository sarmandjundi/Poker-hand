module.exports = class CompareHands {
  static suits = '♦♥♣♠';
  static ranks = '23456789TJQKA';

  static comparer(hand1, hand2) {
    let comparer = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTowPair',
      'isOnePair',
      'isHighestCard'
    ];
    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      console.log(comparer, 'hand1Score', hand1Score, 'hand2Score', hand2Score);
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }
  }

}
  static isStraightFlush(hand) {
  return this.isStraight(hand) && this.isFlush(hand);

}
  static isFourOfAKind(hand) {
  return 0;

}
  static isFullHouse(hand) {
  return 0;
}

    
  static rankToPoint(rank) {
  return this.ranks.indexOf(rank) + 2
}
  static sortByRank(hand)
let score = 0, counter = 0;
for (let card of hand.cards) {

}
{
  hand.cards = hand.cards.sort((a, b) => {
    return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
      -1 : 1;
  });
}
}