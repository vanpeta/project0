
var turn="X"
var win = false
var cells = $('.cells')
var globals = {};



function displayText(){
    document.getElementById("display").innerHTML=turn+"'s turn"
}

$(".level").each(function() {
  $(this).click(function(){
    $(".selected").removeClass("selected");
    // $("selected").toggleClass('selected');
    // $(this).toggleClass("not-selected");
    $(this).addClass('selected');
    // ai.level = $(this).attr("id");
  })
})

// cells.click(function() {
//   if ($(this).html()=="" && globals.game.status === "running" && globals.game.currentState.turn==="X"){
//     $(this).html("<img class='chip occupied' src='"+turn+".png'/>");
//     for (var i=0; i<cells.length; i++){
//       if (cells[i].innerHTML !==""){
//         board[i]=cells[i].innerHTML.charAt(32)
//       }
//     };
//     nextTurn()
//     displayText()

//     winLogic(board)
//   }
// })

function nextTurn() {
  turn = turn === "X" ? "O" : "X"
};

cells.each(function() {
  $(this).click(function() {
    if(globals.game.status === 'running' && globals.game.currentState.turn === "X" && !$(this).hasClass('occupied')) {
      var indx = parseInt($(this).data("indx"));
      var next = new State(globals.game.currentState);
      next.board[indx] = "X";
      if(!cells[indx].hasClass('occupied')) {
        cells[indx].html("<img class= 'chip' src='"+next.board[indx]+".png'/>")
        cells[indx].addClass('occupied');
      }
    }
  })
})

function getWinner(){
  var winCombo = [[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [6,4,2]];
  winCombo.forEach(function (combo){
    var tile1 = cells[combo[0]].innerHTML.charAt(23);
    var tile2 = cells[combo[1]].innerHTML.charAt(23);
    var tile3 = cells[combo[2]].innerHTML.charAt(23);
    if (tile1 === tile2 && tile2 === tile3 && tile1!=="") {
      win = true
      document.getElementById("display").innerHTML=turn+" WINS!!!"
      for (var i=0; i<cells.length; i++) {
        cells[i].removeEventListener('click', humanMove)
      }
    }
  })
};

var Game = function(autoPlayer) {
  console.log(autoPlayer)
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
        document.getElementById("display").innerHTML="X wins";
      else if (_state.result==="O-won")
        document.getElementById("display").innerHTML="O wins";
      else
        document.getElementById("display").innerHTML="Tie game";
    }
    else {
      if(this.currentState.turn==="X") {
        document.getElementById("display").innerHTML=turn+"X's turn";
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
  function takeABlindMove(turn) {
    var available = game.currentState.emptyCells();
    var randomCell = available[Math.floor(Math.random()*available.length)];
    var action = new AIAction(randomCell);
    var next = action.applyTo(game.currentState);
    ui.insertAt(randomCell, turn);
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














