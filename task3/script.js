let player = "X";
let cells = document.getElementsByClassName("cell");

function play(cell){

if(cell.innerHTML !== ""){
return;
}

cell.innerHTML = player;

if(checkWin()){
document.getElementById("status").innerText = player + " Wins!";
disableBoard();
return;
}

player = player === "X" ? "O" : "X";
}

function checkWin(){

let wins = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

for(let i=0;i<wins.length;i++){
let a = cells[wins[i][0]].innerHTML;
let b = cells[wins[i][1]].innerHTML;
let c = cells[wins[i][2]].innerHTML;

if(a && a===b && a===c){
return true;
}
}

return false;
}

function disableBoard(){
for(let i=0;i<cells.length;i++){
cells[i].onclick = null;
}
}

function restart(){
for(let i=0;i<cells.length;i++){
cells[i].innerHTML="";
cells[i].onclick=function(){play(this)};
}

document.getElementById("status").innerText="";
player="X";
}