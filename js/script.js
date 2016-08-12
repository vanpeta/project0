var turn = "X"
var cells = $(".cell")
var display = $("#display")
var oMovesCount = 0
var board = ["E","E","E","E","E","E","E","E","E"];
var winner = ""
var result = ""
var done = false
var available = [];
var options =[]
var nextBoards=[]

cells.click(function() {
  if ($(this).html()=="" && !done){
    $(this).html("<img class='chip occupied' src='"+turn+".png'/>");
    boardState()
    nextTurn()
    displayText()
    winLogic(board)
    aiMove()
  }
})

function boardState () {
  for (var i=0; i<cells.length; i++){
    if (cells[i].innerHTML !==""){
      board[i]=cells[i].innerHTML.charAt(32)
    }
  };
};

function nextTurn() {
  turn = turn === "X" ? "O" : "X"
};

function displayText(){
    display.text("it's "+turn+"'s turn")
};

function finsihGame () {
  if (winner == 0){
    done = true
    result="draw"
    return display.text(result+"!!!")
  } else if (winner == "X" || winner == "O") {
      done = true
      result = winner + "-won";
      return display.text(result+"!!!")
  }
}

function winLogic(board) {
  for(var i=0; i<=6; i=i+3) {
    if(board[i]!=="E" && board[i]===board[i+1] && board[i+1]===board[i+2]){
      winner = board[i]
      finsihGame()
      return winner
    }
  }
  for (var i=0; i<=2; i++) {
    if(board[i]!=="E" && board[i]===board[i+3] && board[i+3]===board[i+6]){
      winner = board[i]
      finsihGame()
      return winner
    }
  }
  for(var i=0,j=4; i<=2; i=i+2, j=j-2){
    if(board[i]!=="E" && board[i]===board[i+j] && board[i+j]===board[i+2*j]){
      winner = board[i]
      finsihGame()
      return winner
    }
  }
  available = []
  for (var i = 0; i<board.length; i++) {
    if(board[i]=="E"){
      available.push(i)
    }
  }
  if (available.length==0) {
    winner = 0
    finsihGame()
    return winner
  }
};

function aiMove () {
  if (!done){
    // randomMove()
    ai(board)
    boardState()
    nextTurn();
    displayText();
    winLogic(board);
  }
};

function randomMove () {
  var picked = available[Math.floor(Math.random()*available.length)]
  cells[picked].innerHTML="<img class='chip occupied' src='"+turn+".png'/>";
}

function ai (board) {
  var score
  if (winner == "X") {
    console.log (score)
    return score = -1
  } else if (winner == "O") {
    console.log (score)
    return socre = 1
  } else if (winner == "0"){
    console.log (score)
    return score = 0
  } else {
    nextBoards = AiPossibleActions(board);
    var possibleWinner = nextBoards.map(winLogic);
    for (var i=0; i<possibleWinner.length; i++){
      if (!possibleWinner[i]) {
        var nextState = nextBoards[i].map(AiPossibleActions)

      }
        // ai(nextBoards[i])
    }
    console.log(nextState)
  }
}


function AiPossibleActions (b) {
  checkEmptyCells(b);
  for (var i=0; i<available.length; i++) {
    nextBoard=b.slice()
    nextBoard[available[i]]=turn;
    nextBoards.push(nextBoard)
  }
  return(nextBoards)
}

function checkEmptyCells (b) {
  for (var i=0; i<b.length; i++) {
    if(b[i]=="E"){
      options.push(i)
    }
  }
  return options;
};



// var numNodes = 0
// function recurseMinimax (board, turn) {
//   numNodes++;
//   if (winner) {
//     if (winner=="X"){
//       // Human wins
//       return [-1, board]
//     } else if (winner =="O"){
//       // AI wins
//       return [1, board]
//     } else if (winner == -1){
//       // it is a tie
//       return [0,board]
//     }
//   } else {
//     var nextBoard=board.slice()
//     for(var i=0; i<nextBoard.length; i++) {
//       if (nextBoard[i] == "E")
//         nextBoard[i]= turn
//         nextTurn()
//         var value = recurseMinimax(nextBoard, turn)[0];
//         if ((turn && (nextVal == null || value > nextVal)) || )

//     }
//   }
// }






// function transition (currentBoard, playerAction) {
//   currentBoard = board;
//   playerAction = AiPossibleActions();
//   playerAction.each
//   return nextBoard
// }


// function aiMove(board) {
//   oMovesCount++
// };


// var State = function(old) {
//   this.turn="";
//   this.oMovesCount = 0;
//   this.result="still running";
//   this.board=[];
//   if (typeof old !== "undefined") {
//     var len=old.board.length;
//     this.board = new Array(len);
//     for (var itr=0; itr<len; itr++){
//       this.board[itr] = old.board[itr];
//     }
//     this.oMovesCount = old.oMovesCount;
//     this.result = old.result;
//     this.turn=old.turn
//   }
//   this.advanceTurn = nextTurn()
//   this.empyCells = checkEmptyCells()
//   this.isTerminal = winLogic()
// };



// //Score at the end of the game
// function score() {
//   if(done) {
//     if(result === "X-won"){
//       return 10 - oMovesCount;
//     }
//     else if(result=== "O-won") {
//       return -10 + oMovesCount;
//     }
//     else {
//       return 0;
//     }
//   }
// };


// function minimaxValue(state) {
//   if (done) {
//     return score()
//   }
//   else {
//     var currentScore;
//     if (turn==="X")
//       currentScore = -1000;
//     else
//       currentScore = 1000;
//     AiPossibleActions(); //array of arrays with board with first "O" move.

//     var availableNextStates = availablePositions.map(function(pos){
//       var action = new AIAction(pos);
//       var nextState = action.applyTo(state);
//       return nextState;
//     });
//     availableNextStates.forEach(function(nextState) {
//       var nextScore = minimaxValue(nextState);
//       if(turn==="X") {
//         if (nextScore>stateScore)
//           stateScore=nextScore;
//       }
//       else {
//         if (nextScore<stateScore)
//           stateScore=nextScore;
//       }
//     });
//     return stateScore;
//   }
// }

//  function AIAction (pos) {
//   movePosition=pos;
//   minimaxVal=0;
//   function applyTo(state) {
//     var next = new State(state);
//     next.board[this.movePosition]=state.turn;
//     if(turn ==="0")
//       oMovesCount++;
//     advanceTurn();
//     return next;
//   }
// };









