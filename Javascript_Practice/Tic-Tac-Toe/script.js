const p = 1;
const table = [
    [0,0,0] , 
    [0,0,0] ,
    [0,0,0]
];


function handle_click(n){
    
    if (n == 1)
    {

    }
    if (n == 2)
    {

    }

}

function win_check(){

}

function start_game()
{
    const title = document.querySelector("h2");
    title.innerHTML = `Turn of Player${p}`;

    squares.forEach(square => { 
        square.addEventListener('click', function() {
            const data = square.getAttribute('value');
            console.log(`Click detected ${data}`);
        });
    });

    handle_click(p)
}


const squares = document.querySelectorAll('.square');


    
start_game();