$(document).ready(function() {

  //  $(document).on("click", function(event) {
  //   $(event.target).closest(".face-down").toggleClass("test");
  //
  // });

  $("#diamond1").click(function() {
    $("#diamond1 #a, #diamond1 #b").toggle();

  });
  $("#diamond2").click(function() {
    $("#diamond2 #p, #diamond2 #q").toggle();
  });
  $("#heart1").click(function() {
    $("#heart1 #e, #heart1 #f").toggle();
  });
  $("#heart2").click(function() {
    $("#heart2 #j, #heart2 #k").toggle();
  });
  $("#club1").click(function() {
    $("#club1 #l, #club1 #m").toggle();
  });
  $("#club2").click(function() {
    $("#club2 #n, #club2 #o").toggle();
  });
  $("#spade1").click(function() {
    $("#spade1 #c, #spade1 #d").toggle();
  });
  $("#spade2").click(function() {
    $("#spade2 #g, #spade2 #h").toggle();
  });



});
