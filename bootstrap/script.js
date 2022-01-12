console.log("Welcome to Tic Tac Toe")


let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
let move=0;
let s='123456789012345'
document.getElementById("idcontainer").innerText=s;
function copyText(){
    let id=document.querySelector(".gameid");
    let dummy=document.createElement('input');
    dummy.value=id.innerText;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    dummy.remove();
}
// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    
    let wins = [
        [0, 1, 2, 2, 7, 0, 41],
        [3, 4, 5, 2, 22.1, 0, 41],
        [6, 7, 8, 2, 37.1, 0, 41],
        [0, 3, 6, -13.5, 22, 90, 42],
        [1, 4, 7, 1.5, 22, 90, 42],
        [2, 5, 8, 16.5, 22, 90, 42],
        [0, 4, 8, -5.3, 22.1, 45, 55],
        [2, 4, 6, -5.4, 22.6, 135, 55],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
           
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won '
            isgameover = true
            
            boxes[e[0]].style.backgroundImage= "linear-gradient(60deg,AntiqueWhite,steelblue)";
            boxes[e[1]].style.backgroundImage= "linear-gradient(60deg,AntiqueWhite,steelblue)";
            boxes[e[2]].style.backgroundImage="linear-gradient(60deg,AntiqueWhite,steelblue)";
        }
    })

    
    }

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
let f=false;
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && isgameover==false){
            move++;
            boxtext.innerText = turn;
            turn = changeTurn();
            if(move<=8)
                {
                checkWin();
                if (!isgameover){
                    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                }
            }
            else if(move>8 && !isgameover){
                    checkWin();
                    if(!isgameover)
                    document.getElementsByClassName("info")[0].innerText  = "   Draw    ";
                }
               

        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Array.from(boxes).forEach(element => {
        element.style.backgroundImage = "none"
        element.style.backgroundColor = "#969497"
    });
    turn = "X"; 
    isgameover = false
    move=0;
    
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

