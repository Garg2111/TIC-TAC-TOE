let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnX = true;
const WinningPatterns =  [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX)
        {
            box.innerText = "X";
            box.style.color = '#0000FF';
            turnX = false;
        } else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
})


const gameDraw = () => {
    msg.innerHTML = `Rematch of destiny? 🎮`;
    msgContainer.classList.remove("hide");
    disableBoxes()

}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}


const showWinner = (winner) => {
    msg.innerHTML = `${winner} takes the win! 🎉 A flawless victory. Rematch? 🔄`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner =  () => {
    for( let pattern of WinningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){

                showWinner(pos1Val);

            }
        }

    }
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


