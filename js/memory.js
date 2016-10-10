function Card (type) {
  this.type = type;
}

// var diamond1 = new Card ("diamond");
// var diamond2 = new Card ("diamond");
// var hear1 = new Card ("heart");
// var heart2 = new Card ("heart");
// var club1 = new Card ("club");
// var club2 = new Card ("club");
// var spade1 = new Card ("spade");
// var spade2 = new Card ("spade");

function compare (card1, card2) {
  var match = "You found a match!";
  var different = "These do not match";
  if (card1.type === card2.type) {
    return match;
  } else {
    return different;
  }
}
