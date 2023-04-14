let score = JSON.parse(localStorage.getItem("Score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function timer() {
  setInterval(playGame(playerMove), 3000);
}

function playGame(playerMove) {
  // alert("Ready..........3...!");
  // alert("2");
  // alert("1");

  const compMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (compMove === "Rock") {
      result = "You Lose.";
    } else if (compMove === "Paper") {
      result = "You Win.";
    } else if (compMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (compMove === "Rock") {
      result = "You Win.";
    } else if (compMove === "Paper") {
      result = "Tie.";
    } else if (compMove === "Scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "Rock") {
    if (compMove === "Rock") {
      result = "Tie.";
    } else if (compMove === "Paper") {
      result = "You Lose.";
    } else if (compMove === "Scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("Score", JSON.stringify(score));

  updateScoreElement();
  function resetMoves() {
    document.querySelector(".js-moves").innerHTML = "";
  }
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
          <img src="./Images/${playerMove}-emoji.png" class="move-icon" />
          <img src="./Images/${compMove}-emoji.png" class="move-icon" /> Computer
          `;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let compMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "Paper";
  } else if (randomNumber >= 2 / 3) {
    compMove = "Scissors";
  }
  return compMove;
}
