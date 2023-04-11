
const Hand = require('..Hand');
const ComparerHands = require('../CompareHands');
test('check that isFlush returns truthy value if flush', () => {

  //♦♥♣♠
  let hand = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  expect(ComparerHands.isFlush(hand)).toBeTruthy();
  ComparerHands.isFlush()
});