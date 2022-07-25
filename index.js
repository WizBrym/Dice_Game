// Players Names
var player1 = prompt("Input Player1 Name").toUpperCase();
document.querySelectorAll('p')[0].innerHTML = player1;
var player2 = prompt("Input Player2 Name").toUpperCase();
document.querySelectorAll('p')[1].innerHTML = player2;

// Player 1 dice
// creating a random number btw 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
  output = "images/dice1.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
} else if (randomNumber1 === 2) {
  output = "images/dice2.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
} else if (randomNumber1 === 3) {
  output = "images/dice3.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
} else if (randomNumber1 === 4) {
  output = "images/dice4.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
} else if (randomNumber1 === 5) {
  output = "images/dice5.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
} else {
  output = "images/dice6.png";
  document.querySelectorAll('img')[0].setAttribute("src", output);
};

// Player 2 dice
// creating a random number btw 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage = "images/" + "dice" + randomNumber2 + ".png"
image2 = document.querySelectorAll('img')[1].setAttribute("src", randomimage);


// Declaring who wins
if (randomNumber1 > randomNumber2) {
  output = player1;
  document.querySelector('h1').innerHTML = output + " WINS!";
} else if (randomNumber1 === randomNumber2) {
  output = "DRAW!";
  document.querySelector('h1').innerHTML = output;
} else {
  output = player2;
  document.querySelector('h1').innerHTML = output + " WINS!";
};
