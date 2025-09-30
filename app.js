let gameSeq =[];
let userSeq=[];
let btns =[ "yellow" ,"red","green" ,"purple"];
let started = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("Game is started");
    started =true;
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");

    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");

    },250);
}
function levelUp(){
    userSeq =[];
    level++;
    h2.innerText =`level ${level}`;
    let ranInd = Math.floor(Math.random()*3);
    let radColor =btns[ranInd];
    let ranBtn = document.querySelector(`.${radColor}`);
    gameSeq.push(radColor);
    console.log(gameSeq);
    gameFlash(ranBtn); //random btn choose
}
function checkAns(idx){
    // console.log("curr level :",level);/
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML =`Game Over!Your score was <b>${level} </b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout( function (){
            document.querySelector("body").style.backgroundColor ="white";
        },150)

        reset();
    }
}
function btnPress() {
    let btn = this;
    // console.log(this);
    userFlash(btn);
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
   checkAns(userSeq.length-1);

}
let allBtn = document.querySelectorAll(".btn");
for ( btn of allBtn){
    btn.addEventListener("click" , btnPress);

}
 function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level =0;
 }