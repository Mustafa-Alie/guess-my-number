'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
};

const displayScore = function (score) {
    document.querySelector(".score").textContent = score
}



document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value)


    if (!guess) {
        displayMessage("⛔ No Number!");

    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 too high!" : "📉 too low!");
            score--;
            displayScore(score);
        }
        else {
            displayMessage("💥 You Lost the Game!");
            displayScore(0);
        }


    }

    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";


        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }


})


document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    displayScore(20);
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

})

