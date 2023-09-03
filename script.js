const cells=document.querySelectorAll('.cell.bt');
const resultContainer=ducument.querySelector('.result');
const resetButton=document.querySelector('.reset-button');
let currentPlayer='X';
let gameBoard=['','','','','','','','','',''];
let gameOver=false;
function checkWin(){
    const winPatters=[
        [0,1,2],
        [3,4,5],
        [6,7,8];
        [0,3,6];
        [1,4,7];
        [2,5,8];
        [0,4,8];
        [2,4,6]
    ];
    for (const pattern of winPatters){
        const [a,b,c]=pattern;
        if (gameBoard[a] && gameBoard[a]=== gameBoard[b] && gameBoard[a]=== gameBoard[c]){
            return gameBoard[a];
        }
    }
    if (!gameBoard.includes('')){
        return 'draw';
    }
    return null;
}
function updateResult(){
    const winner=checkWin()
}