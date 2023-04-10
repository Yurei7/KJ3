let numOfFlipBtns = document.querySelectorAll(".flipbtn").length;
let HEADS = "Heads";
let TAILS = "Tails";

for (i = 0; i < numOfFlipBtns; i++) {
  document.querySelectorAll(".flipbtn")[i].addEventListener("click", flip)
}

function flip() {
  let medHeading = document.querySelector(".medium-heading")
  let winOrLosePrompt= document.querySelector(".winorlose")
  let randomNum = Math.floor((Math.random() * 2));
  let options = [HEADS, TAILS];
  let result = options[randomNum];
  let playerChoice = this.innerHTML
  if (playerChoice === result) {
    medHeading.textContent = result
    winOrLosePrompt.textContent="WINNER WINNER CHICKEN DINNER";
    winOrLosePrompt.style.visibility="visible";
  }
  else if (playerChoice != result) {
    medHeading.textContent = result;
    winOrLosePrompt.textContent= "LOSER LOSER DRUG ABUSER";
    winOrLosePrompt.style.visibility= "visible";
    
  }
}

/*
document.addEventListener("keydown",function (e){
  console.log (e.key);
})
*/