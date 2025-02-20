var p = 1;
const message = document.getElementById("message");
class gameBoard  {
    constructor() {
        this.board = [
            [0,0,0] ,
            [0,0,0] ,
            [0,0,0]
        ];
    }
    
}

const tic = new gameBoard();

function handle_click(n, row, column){
    console.log("Handle click called");
    row = parseInt(row);
    column = parseInt(column);

        if(tic.board[row][column] != 0)
            {
                message.innerHTML=("Error square already full");
                return 0;

            }
        else{
                if (n == 1)
                    {
                        
                        const square = document.getElementById(`${row}${column}`);
                        square.innerHTML = "X";
                        tic.board[row][column] = 1;
                        if (win_check()) {
                            message.innerHTML = (`Player ${p} won`);
                            disableAllSquares();
                            return 1;
                        }
                        return 1;
                        
                    }
                if (n == 2)
                    {
                        const square = document.getElementById(`${row}${column}`);
                        square.innerHTML = "O";
                        tic.board[row][column] = 2;
                        if (win_check()) {
                            message.innerHTML = (`Player ${p} won!`);
                            disableAllSquares();
                            return 1;
                        }
                        return 1;
                        
                    }
                
            }
        

}

function win_check() {

    for (let i = 0; i < 3; i++) {
        if (tic.board[i][0] !== 0 && 
            tic.board[i][0] === tic.board[i][1] && 
            tic.board[i][1] === tic.board[i][2]) {
            return true;
        }
    }
    
    
    for (let j = 0; j < 3; j++) {
        if (tic.board[0][j] !== 0 && 
            tic.board[0][j] === tic.board[1][j] && 
            tic.board[1][j] === tic.board[2][j]) {
            return true;
        }
    }
    
    
    if (tic.board[0][0] !== 0 && 
        tic.board[0][0] === tic.board[1][1] && 
        tic.board[1][1] === tic.board[2][2]) {
        return true;
    }
    
    if (tic.board[0][2] !== 0 && 
        tic.board[0][2] === tic.board[1][1] && 
        tic.board[1][1] === tic.board[2][0]) {
        return true;
    }
    
    return false;
}

function disableAllSquares() {
    squares.forEeach(square => {
        square.style.pointerEvents = "none";
    });
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tic.board[i][j] === 0) {
                return false;
            }
        }
    }
    message.innerHTML = "Game ended in a draw!";
    return true;
}

function switch_user(k){
    return k === 1 ? 2 : 1;
}

function updateTurnMessage() {
    const title = document.querySelector("h2");
    title.innerHTML = `Turn of Player ${p}`;
}

function start_game()
{
    
        updateTurnMessage();
        
    
        squares.forEach(square => { 
            square.addEventListener('click', function() {
    
                const row = square.getAttribute('row');
                const column = square.getAttribute('column');
    
                if(handle_click(p,row,column)) {
                    if(!win_check()) {
                        if(checkDraw()) {
                            return;
                        }
                        p = switch_user(p);
                        updateTurnMessage();
                    }
                }
            });       
        });
   
}


const squares = document.querySelectorAll('.square');

start_game();


