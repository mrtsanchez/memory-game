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

$(document).ready(function() {

  //  $(document).on("click", function(event) {
  //   $(event.target).closest(".face-down").toggleClass("test");
  //
  // });
  var compareArray = [];

  while (compareArray.length <= 2){
    $("#diamond1").click(function() {
      $("#diamond1 #a, #diamond1 #b").toggle();
      var diamond1 = new Card ("diamond");
      compareArray.push(diamond1)
    });
    $("#diamond2").click(function() {
      $("#diamond2 #p, #diamond2 #q").toggle();
      var diamond2 = new Card ("diamond");
      compareArray.push(diamond2)
    });
    $("#heart1").click(function() {
      $("#heart1 #e, #heart1 #f").toggle();
      var heart1 = new Card ("heart");
      compareArray.push(heart1)
    });
    $("#heart2").click(function() {
      $("#heart2 #j, #heart2 #k").toggle();
      var heart2 = new Card ("heart");
      compareArray.push(heart2)
    });
    $("#club1").click(function() {
      $("#club1 #l, #club1 #m").toggle();
      var club1 = new Card ("club");
      compareArray.push(club1)
    });
    $("#club2").click(function() {
      $("#club2 #n, #club2 #o").toggle();
      var club2 = new Card ("club");
      compareArray.push(club2)
    });
    $("#spade1").click(function() {
      $("#spade1 #c, #spade1 #d").toggle();
      var spade1 = new Card ("spade");
      compareArray.push(spade1)
    });
    $("#spade2").click(function() {
      $("#spade2 #g, #spade2 #h").toggle();
      var spade2 = new Card ("spade");
      compareArray.push(spade2)
    });
};

    if (compareArray.length === 2) {
    var matchAttempt = compare(compareArray[0], compareArray[1]);
    $("#result").text(matchAttempt);
  }


});
