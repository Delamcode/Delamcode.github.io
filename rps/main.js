var randChoiceIndex = 0;
var winningElements = [1, -2];
var playerscore = 0;
var comscore = 0;
var played = 0;
var comchoice = ["I picked Rock", "I picked Paper", "I picked Scissors"];

function resetAll() {
    playerscore = 0;
    comscore = 0;
    played = 0;
    document.getElementById("comp-score").innerHTML = comscore.toString();
    document.getElementById("player-score").innerHTML = playerscore.toString();
    document.getElementById("comp-choice").innerHTML = "Computer Choice";
    document.getElementById("win-lose").innerHTML = "Choose one:";
    
}
function rockPressed() {
    document.getElementById("win-lose").innerHTML = updateGame(1);
    document.getElementById("comp-choice").innerHTML = comchoice[randChoiceIndex - 1];
    document.getElementById("comp-score").innerHTML = comscore.toString();
    document.getElementById("player-score").innerHTML = playerscore.toString();
    played++;
}
function paperPressed() {
    document.getElementById("win-lose").innerHTML = updateGame(2);
    document.getElementById("comp-choice").innerHTML = comchoice[randChoiceIndex - 1];
    document.getElementById("comp-score").innerHTML = comscore.toString();
    document.getElementById("player-score").innerHTML = playerscore.toString();
    played++;
}

function scissorsPressed() {
    document.getElementById("win-lose").innerHTML = updateGame(3)
    document.getElementById("comp-choice").innerHTML = comchoice[randChoiceIndex - 1];
    document.getElementById("comp-score").innerHTML = comscore.toString();
    document.getElementById("player-score").innerHTML = playerscore.toString();
    played++;
}
function updateGame(playerChoiceIndex) {
    randChoiceIndex = Math.floor(Math.random() * 3) + 1;
    var score = playerChoiceIndex - randChoiceIndex;
    if (score == 0) {
        return "Tie";
    } else if (winningElements.includes(score)) {
        playerscore++;
        return "You Win";
    } else {
        comscore++;
        return "You lose";
    }
    
}
