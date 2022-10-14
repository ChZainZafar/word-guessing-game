("use strict ");

let words = [
  "mirror",
  "fridge",
  "helicopter",
  "understand",
  "fight",
  "exercise",
  "scissor",
  "junior",
  "keypad",
  "website",
  "inverted",
  "should",
];
let score = 20;
let highscore = 0;
let counter = 0;
const shuffleWord = function (word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
};
let random = Math.trunc(Math.random() * 12);
let shuffle = shuffleWord(words[random]);

const playAgain = function () {
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  random = Math.trunc(Math.random() * 12);
  shuffle = shuffleWord(words[random]);
  document.querySelector(".word").textContent = shuffle;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
};

document.querySelector(".word").textContent = shuffle;
document.querySelector(".check").addEventListener("click", function () {
  counter = 0;
  const guess = document.querySelector(".guess").value;
  console.log(guess, words[random]);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter a word plz";
  } else if (guess === words[random]) {
    console.log("inside");
    document.querySelector(".message").textContent = "🎉 You got it!";
    document.querySelector(".word").textContent = words[random];
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    const smallerLength =
      words[random].length < guess.length ? words[random].length : guess.length;
    for (let i = 0; i < smallerLength; i++) {
      console.log(words[random][i], guess[i], counter);
      if (words[random][i] == guess[i]) {
        counter++;
      }
    }
    score--;
    document.querySelector(".score").textContent = score;
    //    document.querySelector(".message").textContent = counter;

    document.querySelector(".message").textContent =
      "Wrong guess ! (your " + counter + " letters are in same position)";
  }
});
document.querySelector(".again").addEventListener("click", playAgain);
