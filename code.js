function playGame(selected) {
  var randomNum = Math.floor(Math.random() * 3 + 1);
  var computer = randomNum;
  var user = selected;
  var output;

  if (user == 1) {
    document.getElementById("userPic").src = "./photos/rock.png";
  } else if (user == 2) {
    document.getElementById("userPic").src = "./photos/paper.png";
  } else {
    document.getElementById("userPic").src = "./photos/scissors.png";
  }

  if (computer == 1) {
    document.getElementById("computerPic").src = "./photos/rock.png";
  } else if (computer == 2) {
    document.getElementById("computerPic").src = "./photos/paper.png";
  } else {
    document.getElementById("computerPic").src = "./photos/scissors.png";
  }

  if (user == computer) {
    output = 'Tie!';
  } else if (user == 1 && computer == 3) {
    output = 'You Win!';
  } else if (computer == 1 && user == 3) {
    output = 'You Lose!';
  } else if (user > computer) {
    output = 'You Win!';
  } else if (computer > user) {
    output = 'Computer Wins!'
  }

  document.getElementById("output").innerHTML = output;
}




function togglePiece(pieceNum) {
  var param = "piece" + pieceNum;
  if (document.getElementById(param).style.display == "inline-block") {
    document.getElementById(param).style.display = "none";
  } else {
    document.getElementById(param).style.display = "inline-block";
  }
}