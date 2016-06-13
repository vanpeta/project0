
var turn=1
var done = "no"
var a1 = ""
var a2 = ""
var a3 = ""
var b1 = ""
var b2 = ""
var b3 = ""
var c1 = ""
var c2 = ""
var c3 = ""
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
    document.getElementById("a1").innerHTML = "<img id='a1X' class= 'chip' src='X.png'/>"
    a1 = "X"
    turn++
  } else if ((a1=="")&&(turn%2==0)){
    document.getElementById("a1").innerHTML = "<img id='a1O' class= 'chip' src='O.png'/>"
    a1 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressA2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((a2=="")&&(turn%2==1)){
    document.getElementById("a2").innerHTML = "<img id='a2X' class= 'chip' src='X.png'/>"
    a2 = "X"
    turn++
  } else if ((a2=="")&&(turn%2==0)){
    document.getElementById("a2").innerHTML = "<img id='a2O' class= 'chip' src='O.png'/>"
    a2 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressA3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((a3=="")&&(turn%2==1)){
    document.getElementById("a3").innerHTML = "<img id='a3X' class= 'chip' src='X.png'/>"
    a3 = "X"
    turn++
  } else if ((a3=="")&&(turn%2==0)){
    document.getElementById("a3").innerHTML = "<img id='a3O' class= 'chip' src='O.png'/>"
    a3 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressB1() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b1=="")&&(turn%2==1)){
    document.getElementById("b1").innerHTML = "<img id='b1X' class= 'chip' src='X.png'/>"
    b1 = "X"
    turn++
  } else if ((b1=="")&&(turn%2==0)){
    document.getElementById("b1").innerHTML = "<img id='b1O' class= 'chip' src='O.png'/>"
    b1 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressB2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b2=="")&&(turn%2==1)){
    document.getElementById("b2").innerHTML = "<img id='b2X' class= 'chip' src='X.png'/>"
    b2 = "X"
    turn++
  } else if ((b2=="")&&(turn%2==0)){
    document.getElementById("b2").innerHTML = "<img id='b2O' class= 'chip' src='O.png'/>"
    b2 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressB3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((b3=="")&&(turn%2==1)){
    document.getElementById("b3").innerHTML = "<img id='b3X' class= 'chip' src='X.png'/>"
    b3 = "X"
    turn++
  } else if ((b3=="")&&(turn%2==0)){
    document.getElementById("b3").innerHTML = "<img id='b3O' class= 'chip' src='O.png'/>"
    b3 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressC1() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c1=="")&&(turn%2==1)){
    document.getElementById("c1").innerHTML = "<img id='c1X' class= 'chip' src='X.png'/>"
    c1 = "X"
    turn++
  } else if ((c1=="")&&(turn%2==0)){
    document.getElementById("c1").innerHTML = "<img id='c1O' class= 'chip' src='O.png'/>"
    c1 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressC2() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c2=="")&&(turn%2==1)){
    document.getElementById("c2").innerHTML = "<img id='c2X' class= 'chip' src='X.png'/>"
    c2 = "X"
    turn++
  } else if ((c2=="")&&(turn%2==0)){
    document.getElementById("c2").innerHTML = "<img id='c2O' class= 'chip' src='O.png'/>"
    c2 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function pressC3() {
    if (done == "yes") {
      alert("GAME OVER - Press Reset Game to play again")
  } else if ((c3=="")&&(turn%2==1)){
    document.getElementById("c3").innerHTML = "<img id='c3X' class= 'chip' src='X.png'/>"
    c3 = "X"
    turn++
  } else if ((c3=="")&&(turn%2==0)){
    document.getElementById("c3").innerHTML = "<img id='c3O' class= 'chip' src='O.png'/>"
    c3 = "O"
    turn++
  } displayText()
    getWinner()
    aiMove()
}
function getWinner(){
  var a1 = document.getElementById("a1").innerHTML.charAt(11);
  var a2 = document.getElementById("a2").innerHTML.charAt(11);
  var a3 = document.getElementById("a3").innerHTML.charAt(11);
  var b1 = document.getElementById("b1").innerHTML.charAt(11);
  var b2 = document.getElementById("b2").innerHTML.charAt(11);
  var b3 = document.getElementById("b3").innerHTML.charAt(11);
  var c1 = document.getElementById("c1").innerHTML.charAt(11);
  var c2 = document.getElementById("c2").innerHTML.charAt(11);
  var c3 = document.getElementById("c3").innerHTML.charAt(11);

  if ((a1=="X"&&a2=="X"&&a3=="X")||(a1=="X"&&b1=="X"&&c1=="X")||(a1=="X"&&b2=="X"&&c3=="X")||(a2=="X"&&b2=="X"&&c2=="X")||(a3=="X"&&b3=="X"&&c3=="X")||(a3=="X"&&b2=="X"&&c1=="X")||(b1=="X"&&b2=="X"&&b3=="X")||(c1=="X"&&c2=="X"&&c3=="X")){
    document.getElementById("display").innerHTML="X WINS!!!"
    stop()
  } else if ((a1=="O"&&a2=="O"&&a3=="O")||(a1=="O"&&b1=="O"&&c1=="O")||(a1=="O"&&b2=="O"&&c3=="O")||(a2=="O"&&b2=="O"&&c2=="O")||(a3=="O"&&b3=="O"&&c3=="O")||(a3=="O"&&b2=="O"&&c1=="O")||(b1=="O"&&b2=="O"&&b3=="O")||(c1=="O"&&c2=="O"&&c3=="O")){
    document.getElementById("display").innerHTML="O WINS!!!"
    stop ()
  } else if (turn==10){
    document.getElementById("display").innerHTML="It is a tie!"
    stop ()
  }
}

function aiMove() {
  if (turn == 10 && done == "no"){
    return (document.getElementById("display").innerHTML="It is a tie!")
  }else {
    var tiles = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
    var tile = tiles[Math.floor(Math.random()*tiles.length)]
    console.log (tile)
    var newTile = document.getElementById(tile).innerHTML
    var move = "O"
    if (turn%2==0 && newTile == "" && done!="yes") {
      document.getElementById(tile).innerHTML = "<img id='"+tile+move+"' class= 'chip' src='O.png'/>"
      turn++
    }else if (turn%2==0 && done!="yes") {
      tile = tiles[Math.floor(Math.random()*tiles.length)]
      aiMove()
    }
    displayText()
    getWinner()
  }
}


var State = function(old) {
  this.turn="";
  this.oMovesCount = 0;
  this.result="still running";
  this.board=[];
  if (typeof old !== "undefined") {
    var len=old.board.length;
    this.board = new Array(len);
    for (var itr=0; itr<len; itr++){
      this.board[itr] = old.board[itr];
    }
    this.oMovesCount = old.oMovesCount;
    this.result = old.result;
    this.turn=old.turn
  }
  this.advanceTurn = function(){
    this.turn = this.turn === "X" ? "O" : "X"
  }
  this.empyCells = function() {
    var indxs =[];
    for(var itr=0; itr<9; itr++){
      if(this.board[itr]==="E"){
        indxs.push(itr);
      }
    }
    return indxs;
  }
  this.isTerminal = function() {
    var B= this.board;
    for(var i=0; i<=6; i= i+3) {
      if(B[i]!=="E" && B[i]===B[i+1] && B[i+1]===B[i+2]){
        this.result = B[i] + "-won";
        return true
      }
    }
    for (var i=0; i<=2; i++) {
      if(B[i]!=="E" && B[i]===B[i+3] && B[i+6]){
        this.result = B[i] + "-won";
      }
    }
    for(var i=0,j=4; i<=2; i=i+2, j=j-2){
      if(B[i]!=="E" && B[i]==B[i+j] && B[i+j]===B[i=2*j]){
        this.result=B[i]+"-won";
        return true;
      }
    }
    var available = this.empyCells();
    if (available.length==0) {
      this.result="draw"
      return true
    }
    else {
      return false;
    }
  };
};

var AI = function (level) {
  var levelOfIntelligence = level;
  var game = {};
  function minimaxValue(state){

  }
  function takeABlindMove(turn) {

  }
  function takeANoviceMove(turn) {

  }
  function takeAMasterMove(move) {

  }
  this.plays=function(_game){
    game=_game;
  };
  this.notify = function(turn) {
    switch(levelOfIntelligence) {
      case "blind": takeABlindMove(turn); break;
      case "novice": takeANoviceMove(turn); break;
      case "master": takeAMasterMove(turn); break;
    }
  };
};

var AIAction = function(pos) {
  this.movePosition=pos;
  this.minimaxVal=0;
  this.applyTo=function(state) {
    var next = new State(state);
    next.board[this.movePosition]=state.turn;
    if(state.turn ==="0")
      next.oMovesCount++;
    next.advanceTurn();
    return next;
  }
};

AIAction.ASCENDING = function(firstAction, secondAction) {
  if (firstAction.minimaxVal<secondAction.minimaxVal)
    return -1;
  else if (firstAction.minimaxVal>secondAction.minimaxVal)
    return 1;
  else
    return 0
 }

 AIAction.DESCENDING = function(firstAction,secondAction) {
  if (firstAction.minimaxVal>secondAction.minimaxVal)
    return -1;
  else if (firstAction.minimaxVal<secondAction.minimaxVal)
    return 1;
  else
    return 0;
 }

var Game = function(autoPlayer) {
  this.ai = autoPlayer;
  this.currentState = new State();
  this.currentState.board=[ "E","E","E",
                            "E","E","E",
                            "E","E","E",];
  this.currentState.turn = "X";
  this.status="beginning";
  this.advanceTo = function(_state) {
    this.currentState = _state;
    if(_state.isTermninal()){
      this.status="ended";
      if(_state.result==="X-won")
        ui.switchViewTo('won');
      else if (_state.result==="O-won")
        ui.switchViewTo('lost');
      else
        ui.switchViewTo('draw');
    }
    else {
      if(this.currentState.turn==="X") {
        ui.switchViewTo('human');
      }
      else {
        ui.switchViewTo('robot');
        this.ai.notify('O')
      }
    }
  };
  this.start = function() {
    if(this.status="beginning") {
      this.advanceTo(this.currentState);
      this.status="running";
    }
  }
};

Game.score = function(_state) {
  if(_state.result !=="still running") {
    if(_state.result === "X-won"){
      return 10 - _state.oMovesCount;
    }
    else if(_state.result==="O-won") {
      return -10+_state.oMovesCount;
    }
    else {
      return 0;
    }
  }
};

function minimaxValue(state) {
  if(state.isTerminal()){
    return Game.score(state);
  }
  else {
    var stateScore;
    if (state.turn==="X")
      stateScore = -1000;
    else
      stateScore = 1000;
    var availablePositions = state.empyCells();
    var availableNextStates = availablePositions.map(function(pos){
      var action = new AIAction(pos);
      var nextState = action.applyTo(state);
      return nextState;
    });
    availableNextStates.forEach(function(nextState) {
      var nextScore = minimaxValue(nextState);
      if(state.turn==="X") {
        if (nextScore>stateScore)
          stateScore=nextScore;
      }
      else {
        if (nextScore<stateScore)
          stateScore=nextScore;
      }
    });
    return stateScore;
  }
}

function takeAMasterMove(turn) {
  var available = game.currentState.empyCells();
  var availableActions = available.map(function(pos) {
    var action = newAIAction(pos);
    var next = action.applyTo(game.currentState);
    action.minimaxVal= minimaxValue(next)
    return action;
  });
  if(turn=="X")
    availableActions.sort(AIAction.DESCENDING);
  else
    availableActions.sort(AIAction.ASCENDING);
  var chosenAction = availableActions[0];
  var next = chosenAction.applyTo(game.currentState);
  ui.insertAt(chosenAction.movePosition, turn);
  game.advanceTo(next);
}

function takeANoviceMove(turn) {
  var available = game.currentState.empyCells();
  var availableActions = available.map(function(pos) {
    var action = newAIAction(pos);
    var next = action.applyTo(game.currentState);
    action.minimaxVal= minimaxValue(next)
    return action;
  });
  if(turn=="X")
    availableActions.sort(AIAction.DESCENDING);
  else
    availableActions.sort(AIAction.ASCENDING);
  var chosenAction;
  if(Math.random()*100<=40){
    chosenAction = availableActions[0];
  }
  else {
    if (availableActions.length>=2) {
      chosenAction=availableActions[1];
    }
    else {
      chosenAction = availableActions[0];
    }
  }
  var next = chosenAction.applyTo(game.currentState);
  ui.insertAt(chosenAction.movePosition, turn);
  game.advanceTo(next);
};












