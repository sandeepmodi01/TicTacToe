/*

var yourName=prompt("What is your name?");

var fcharname = yourName.slice(0,1);
var fcharName = fcharname.toUpperCase();

var restname = yourName.slice(1,yourName.length);
var restName = restname.toLowerCase();

var fullName = fcharName + restName;
alert('Hello '+fullName);

*/

//Current Time Show

var time = document.getElementById("time");
function printTime()
{
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("time").innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime,1000);


let turn = "X";
let isGameOver = false;

const changeTurn = ()=>{
    return turn === "X"?"O": "X";
}

const checkWin = ()=>{
    let boxtxt = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]

    wins.forEach(txt =>{
        if((boxtxt[txt[0]].innerText === boxtxt[txt[1]].innerText) && (boxtxt[txt[2]].innerText === boxtxt[txt[1]].innerText) && (boxtxt[txt[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtxt[txt[0]].innerText + " has won!";
            isGameOver = true;
            
            document.getElementById("gameOver").style.visibility = "visible";
            document.getElementById("gameOver").style.transitionDelay = "1.5s";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${txt[3]}vw, ${txt[4]}vw) rotate(${txt[5]}deg)`;
            document.getElementsByClassName("container").style.display = none;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

restart.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementById("gameOver").style.visibility = "hidden";
    document.getElementById("gameOver").style.transitionDelay = "0s";
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
})

