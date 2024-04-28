
const choice = ["✊", "✋", "✌"];
const playerdispaly = document.getElementById("playerdispaly");
const computerdispaly = document.getElementById("computerdispaly");
const resultdisplay = document.getElementById("resultdisplay");
let PScore=0;
let CScore=0;


function game(playerchoice){

  const PlayerScore = document.getElementById("PlayerScore");
  const CompScore = document.getElementById("CompScore");
 

  const computerchoice = choice[Math.floor(Math.random() * 3)];

  let result = "";

  if(computerchoice === playerchoice){
    result = "IT IS A TIE"
  }

  else{
    switch(playerchoice){

      case "✊":
        result =(computerchoice === "✌") ? "YOU WIN"  : "YOU LOSE";
        break;
      case "✋":
        result =(computerchoice === "✊") ? "YOU WIN" : "YOU LOSE";
        break;
      case "✌":
        result =(computerchoice === "✋") ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }


  playerdispaly.textContent = `Player:${playerchoice}`;
  computerdispaly.textContent = `Computer:${computerchoice}`;
  resultdisplay.textContent = result;

  switch (result) {
    case "YOU WIN":
      resultdisplay.classList.remove("red","orange");
      resultdisplay.classList.add("green");
      PScore++;
      PlayerScore.textContent = PScore;
      break;
    case "YOU LOSE":
      resultdisplay.classList.remove("green","orange");
      resultdisplay.classList.add("red");
      CScore++;
      CompScore.textContent = CScore;
      break;
    case "IT IS A TIE":
      resultdisplay.classList.remove("green" ,"red");
      resultdisplay.classList.add("orange");
      break;
  }
}