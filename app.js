let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2")

let started = false;
let level = 0;
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}



function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() *4);
    let randomColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(randIndx);
    // console.log(randomColor);
    // console.log(randbtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
   gameFlash(randbtn);
}

function checkAns(idx){
   // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup, 550);
        }
    } else{
         h2.innerHTML = `Game over, Your score was ${level}  Pres any key to start again :)`;
         document.querySelector("body").style.backgroundColor ="red";
         setTimeout( function (){
             document.querySelector("body").style.backgroundColor ="white";
         }, 250);
         reset();
    }

}

function btnPress(){
   // console.log(this);
    let btn = this;
    userFlash(btn);

   userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}