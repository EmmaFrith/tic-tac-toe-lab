/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/


let board = ['', '', '', '', '', '', '', '', '']
// reprents the state of the board
// starting from top left to bottom right: board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]

let turn = X
// represents who's turn it is, either X or 0

let winner = false
// false means no winner, true means winner

let tie = false
// represents if its a tie - true means that all squares have been played + there is no winner


/*------------------------ Cached Element References ------------------------*/


const squareEls = document.querySelectorAll('.sqr')
// grabs all elements with the sqr class


const messageEl = document.querySelector('#message')
// grabs the game status message


/*-------------------------------- Functions --------------------------------*/

//dont understand what to do here
function init(){
}
init()

//dont understand what to do here
function render(){
}
render()

//dont understand how a for each function fits into another function
function updateBoard(){
    board.forEach((square) => console.log(square));
}

//need to understandn the syntax for this
function updateMessage(){
    if (winnner===false && tie===false)
    return turn
    else if (winner===false && tie===true)
    return "tie"
    else "win"
}



/*----------------------------- Event Listeners -----------------------------*/


