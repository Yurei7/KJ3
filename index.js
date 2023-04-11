
let HEADS = "Heads";
let TAILS = "Tails";
$(".flipbtn").click(flip)
function flip() {
  let medHeading = $(".medium-heading")
  let winOrLosePrompt = $(".winorlose")
  let randomNum = Math.floor((Math.random() * 2));
  let options = [HEADS, TAILS];
  let result = options[randomNum];
  let playerChoice = this.innerHTML
  if (playerChoice === result) {
    medHeading.text(result);
    winOrLosePrompt.text("WINNER WINNER CHICKEN DINNER");
    winOrLosePrompt.css("visibilityy", "visible");
  }
  else if (playerChoice != result) {
    medHeading.text(result);
    winOrLosePrompt.text("LOSER LOSER DRUG ABUSER");
    winOrLosePrompt.css("visibility", "visible");
  }
}

