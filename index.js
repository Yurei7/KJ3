
let HEADS = "Heads";
let TAILS = "Tails";
$(".flipbtn").click(flip)
function flip() {
  let medHeading = $(".medium-heading")
  let randomNum = Math.floor((Math.random() * 2));
  let options = [HEADS, TAILS];
  let result = options[randomNum];
  let playerChoice = this.innerHTML

  $(".loading").css("visibility", "visible");
  $(".flipscreen").css("visibility", "hidden");
  medHeading.text("FLIPPING...")
  setTimeout(() => {
    $(".loading").css("visibility", "hidden")
    $(".flipscreen").css("visibility", "visible")


    if (result === HEADS) {
      $(".heads-img").css("visibility", "visible")
      $(".tails-img").css("visibility", "hidden")
    }
    else if (result === TAILS) {
      $(".tails-img").css("visibility", "visible")
      $(".heads-img").css("visibility", "hidden")
    }

    if (playerChoice === result) {
      /* medHeading.text(result);*/
      medHeading.text("WINNER WINNER CHICKEN DINNER");
      medHeading.css("font-size", "50px")
      /*winOrLosePrompt.css("visibilityy", "visible");*/
    }
    else if (playerChoice != result) {
      /*medHeading.text(result);*/
      medHeading.text("LOSER LOSER DRUG ABUSER");
      medHeading.css("font-size", "50px")

    }

  }, 3000);
}



