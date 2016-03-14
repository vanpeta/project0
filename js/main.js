
var turn=1
var done = "no"
var a1 = document.getElementById("a1").textContent
var a2 = document.getElementById("a2").textContent
var a3 = document.getElementById("a3").textContent
var b1 = document.getElementById("b1").textContent
var b2 = document.getElementById("b2").textContent
var b3 = document.getElementById("b3").textContent
var c1 = document.getElementById("c1").textContent
var c2 = document.getElementById("c2").textContent
var c3 = document.getElementById("c3").textContent
function stop (){
    done = "yes"
}
function displayText(){
  if (turn>1 && turn%2==0){
    document.getElementById("display").innerHTML="O's turn"
  }
  else if (turn>1 && turn%2==1){
    document.getElementById("display").innerHTML="X's turn"
  }
}
function pressA1() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((a1=="")&&(turn%2==1)){
    document.getElementById("a1").innerHTML = "<img id='a1X' src='X.png'/>"
    a1 = "X"
    turn++
  } else if ((a1=="")&&(turn%2==0)){
    document.getElementById("a1").innerHTML = "<img id='a1O' src='O.png'/>"
    a1 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressA2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((a2=="")&&(turn%2==1)){
    document.getElementById("a2").innerHTML = "<img id='a2X' src='X.png'/>"
    a2 = "X"
    turn++
  } else if ((a2=="")&&(turn%2==0)){
    document.getElementById("a2").innerHTML = "<img id='a2O' src='O.png'/>"
    a2 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressA3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((a3=="")&&(turn%2==1)){
    document.getElementById("a3").innerHTML = "<img id='a3X' src='X.png'/>"
    a3 = "X"
    turn++
  } else if ((a3=="")&&(turn%2==0)){
    document.getElementById("a3").innerHTML = "<img id='a3O' src='O.png'/>"
    a3 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressB1() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b1=="")&&(turn%2==1)){
    document.getElementById("b1").innerHTML = "<img id='b1X' src='X.png'/>"
    b1 = "X"
    turn++
  } else if ((b1=="")&&(turn%2==0)){
    document.getElementById("b1").innerHTML = "<img id='b1O' src='O.png'/>"
    b1 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressB2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b2=="")&&(turn%2==1)){
    document.getElementById("b2").innerHTML = "<img id='b2X' src='X.png'/>"
    b2 = "X"
    turn++
  } else if ((b2=="")&&(turn%2==0)){
    document.getElementById("b2").innerHTML = "<img id='b2O' src='O.png'/>"
    b2 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressB3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b3=="")&&(turn%2==1)){
    document.getElementById("b3").innerHTML = "<img id='b3X' src='X.png'/>"
    b3 = "X"
    turn++
  } else if ((b3=="")&&(turn%2==0)){
    document.getElementById("b3").innerHTML = "<img id='b3O' src='O.png'/>"
    b3 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressC1() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c1=="")&&(turn%2==1)){
    document.getElementById("c1").innerHTML = "<img id='c1X' src='X.png'/>"
    c1 = "X"
    turn++
  } else if ((c1=="")&&(turn%2==0)){
    document.getElementById("c1").innerHTML = "<img id='c1O' src='O.png'/>"
    c1 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressC2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c2=="")&&(turn%2==1)){
    document.getElementById("c2").innerHTML = "<img id='c2X' src='X.png'/>"
    c2 = "X"
    turn++
  } else if ((c2=="")&&(turn%2==0)){
    document.getElementById("c2").innerHTML = "<img id='c2O' src='O.png'/>"
    c2 = "O"
    turn++
  } displayText()
    getWinner()
}
function pressC3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c3=="")&&(turn%2==1)){
    document.getElementById("c3").innerHTML = "<img id='c3X' src='X.png'/>"
    c3 = "X"
    turn++
  } else if ((c3=="")&&(turn%2==0)){
    document.getElementById("c3").innerHTML = "<img id='c3O' src='O.png'/>"
    c3 = "O"
    turn++
  } displayText()
    getWinner()
}
function getWinner (){
  if ((a1=="X"&&a2=="X"&&a3=="X")||(a1=="X"&&b1=="X"&&c1=="X")||(a1=="X"&&b2=="X"&&c3=="X")||(a2=="X"&&b2=="X"&&c2=="X")||(a3=="X"&&b3=="X"&&c3=="X")||(a3=="X"&&b2=="X"&&c1=="X")||(b1=="X"&&b2=="X"&&b3=="X")||(c1=="X"&&c2=="X"&&c3=="X")){
    document.getElementById("display").innerHTML="X WINS!!!"
    stop()
  } else if ((a1=="O"&&a2=="O"&&a3=="O")||(a1=="O"&&b1=="O"&&c1=="O")||(a1=="O"&&b2=="O"&&c3=="O")||(a2=="O"&&b2=="O"&&c2=="O")||(a3=="O"&&b3=="O"&&c3=="O")||(a3=="O"&&b2=="O"&&c1=="O")||(b1=="O"&&b2=="O"&&b3=="O")||(c1=="O"&&c2=="O"&&c3=="O")){
    document.getElementById("display").innerHTML="O WINS!!!"
    stop ()
  } else if (turn==10){
    document.getElementById("display").innerHTML="It is a tie!"
  }
}
