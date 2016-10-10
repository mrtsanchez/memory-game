function Play (cards1, cards2){
  this.cardsOne = cards1;
  this.cardsTwo = cards2;
}

function compare(){

}




$(document).ready(function() {

var revealedCards = 0;
var matchAttempt = [];

 $(".cards").click(function(event) {

   if (revealedCards < 1){

   $(event.target).closest(".face-down").toggleClass("test");
   revealedCards +=1;
   matchAttempt.push($(".face-up").attr("src"));

   console.log(matchAttempt);
   } else {
     matchAttempt.push($(".face-up").attr("src"));
     console.log(matchAttempt);
     if (matchAttempt[0] === matchAttempt[1]){
     revealedCards = 0;
     alert("yeah!");
    }
    else{
      alert("no match");
    }
   }

   });




    //
    //
    // var target = "#" + event.target.id;
    // $(target).removeClass("face-up");
    //


});
