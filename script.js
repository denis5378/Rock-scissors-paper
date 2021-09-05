

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const scissorsBtn = document.querySelector('.scissors');
        const paperBtn = document.querySelector('.paper');
        const playerOptions = [rockBtn, scissorsBtn, paperBtn];
        const computerOptions = ['камень', 'ножницы', 'бумага'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Осталось ходов: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                computerPicture(computerChoice);
                winner(this.innerText, computerChoice);

                if(moves === 10){
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    
    const computerPicture = (computer) => {
        const computerPic = document.getElementById('computer-pic');
        switch (computer) {
            case 'камень': computerPic.src = 'Source/stone.png'
            break;
            case 'ножницы': computerPic.src = 'Source/scissors.png'
            break;
            case 'бумага': computerPic.src = 'Source/paper.png'
            break;
        }    
    }

const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.score-player');
    const computerScoreBoard = document.querySelector('.score-computer');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer){
            result.textContent = 'Ничья!';
    }
    else if (player == 'камень'){
        if (computer == 'бумага'){
            result.textContent = 'Вы проиграли';
            computerScore++;
            computerScoreBoard.textContent = 'Побед компьютера: ' + computerScore;
        }
        else{
            result.textContent = 'Вы выиграли';
            playerScore++;
            playerScoreBoard.textContent = 'Побед игрока: ' + playerScore;
        }
    }
    else if (player == 'ножницы'){
        if (computer == 'камень'){
            result.textContent = 'Вы проиграли';
            computerScore++;
            computerScoreBoard.textContent = 'Побед компьютера: ' + computerScore;
        }
        else{
            result.textContent = 'Вы выиграли';
            playerScore++;
            playerScoreBoard.textContent = 'Побед игрока: ' + playerScore;
        }
    }
    else if (player == 'бумага'){
        if (computer == 'ножницы'){
            result.textContent = 'Вы проиграли';
            computerScore++;
            computerScoreBoard.textContent = 'Побед компьютера: ' + computerScore;
        }
        else{
            result.textContent = 'Вы выиграли';
            playerScore++;
            playerScoreBoard.textContent ='Побед игрока: ' + playerScore;
        }
    }
};

const gameOver = (playerOptions, movesLeft) => {
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');
    const computerCard = document.querySelector('.enemy');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })
    computerCard.style.display = 'none';

    if(playerScore > computerScore){
        result.innerText = 'Вы выиграли игру!!';
    }
    else if (playerScore < computerScore){
        result.innerText = 'Вы проиграли игру!!';
    }
    else {
        result.innerText = 'Ничья!!'
    }
    
    reloadBtn.style.display = 'block';
    reloadBtn.addEventListener('click', () => {
        document.location.reload();
    }) 
    
}

    playGame();

}

game();








