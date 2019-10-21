"use strict";
let boy =document.getElementsByClassName('btn');

window.onload = function(){

    let board = document.getElementById("board");                   //Board area
    let squares = board.querySelectorAll("div");                    //Sqaures on board
    let x = 1;                                                      //Counter
    let id;   
    let control = document.getElementsByClassName('btn');                                                      //stores id of last clicked square
    
                                                            
    squares.forEach(square => {

        square.classList.add('square');                             //add Class to each square
        square.setAttribute('id', x);                               //add ID to each square

        square.addEventListener('mouseover', function(){            //adds hover class for effect when mouse enters squares
            square.classList.add('hover'); 
        });

        square.addEventListener('mouseleave', function(){            //removes hover class when mouse exits squares
            square.classList.remove('hover'); 
        });

        square.addEventListener("click", function(){                //add click event to each square
            id = square.id;                                         //Set id variable value to clicked sqaure
            ticTac(id);                                             //Calls function to add X or O
            tag(id);  
            restart();
                                                                      
        });

        x += 1;

    });

}

//variables
let ticked =[]
let player;                                                         
let next_player = "O";
let decide;


function loader() {                                                 //function to start new game
    let board = document.getElementById("board");                   //Board area
    let squares = board.querySelectorAll("div");                    //Sqaures on board

    squares.forEach(square => {
        square.innerHTML = "";

    })
    
    
}

function ticTac(id){                                                //Function to add X's and O's
    
    if (next_player === "O"){                                       //Alternates between X and O depending on how last played.
        next_player = "X";
    }else{
        next_player = "O";
    }

    document.getElementById(id).innerHTML = next_player;
    
}

function tag (id){
    if (next_player === "O"){
        document.getElementById(id).classList.add("O");
        
    }else{
        document.getElementById(id).classList.add("X");
   
    }
}

function restart(){
   boy.onclick = loader();
       alert('You Are Playing A New Game Of Tic Tac Toe');
   
}  


