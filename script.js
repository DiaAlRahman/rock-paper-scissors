let score1 = 0;
let score2 = 0;

const homeScore = document.querySelector('#home-score');
const awayScore = document.querySelector('#away-score');

const gameOverMsg = document.querySelector('.game-over');

const choiceMsg = document.querySelector('.computer-choice')
const choiceMsgUser = document.querySelector('.user-choice')

function game(user) {
    let user_choice;
    let computer_choice;

    user_choice = user;
    computer_choice = Math.floor(Math.random() * 2);
    showComputerChoice(computer_choice);

    switch (select_winner(user_choice, computer_choice)) {
        case 1:
            score1 += 1;
            homeScore.innerText = homeScore.innerText.slice(0, 10);
            homeScore.innerText += ` ${score1}`;
            break;
        case 2:
            score2 += 1;
            awayScore.innerText = awayScore.innerText.slice(0, 12);
            awayScore.innerText += ` ${score2}`;
            break;
    }

    if (score1 >= 3 || score2 >= 3)
        gameOver(score1, score2);
    }

    

function createButtons() {
    if (document.querySelector('.weapons')) {
        return;
    }

    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    const weapons = document.createElement('div');

    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';

    weapons.setAttribute('class', 'weapons');
    rock.setAttribute('id', '0');
    paper.setAttribute('id', '1');
    scissors.setAttribute('id', '2');

    document.body.insertBefore(weapons, choiceMsg);
    weapons.append(rock, paper, scissors);

    Array.from(weapons.children).forEach((weapon) => {
        weapon.addEventListener('click', (event) => {
            game(event.target.id);
            showUserChoice(event.target.id);
        })
    })
}

function delWeapons() {
    const weapons = document.querySelector('.weapons');
    weapons.remove();
}

function select_winner(choice1, choice2) {
    let winner = (3 + choice1 - choice2) % 3;

    switch (winner) {
        case 0:
            gameOverMsg.innerText = "That's a draw!";
            return 0;
        case 1:
            gameOverMsg.innerText = "You win!";
            return 1;
        case 2:
            gameOverMsg.innerText = "You lose!";
            return 2;
    }
}

function gameOver(score1, score2) {
    delWeapons();
    if (score1 > score2) {
        gameOverMsg.textContent = "Game Over! You win :(";
    } else {
        gameOverMsg.textContent = "Game over! I win :)";
    }
    
}

function showComputerChoice(computer_weapon) {
    choiceMsg.innerText = choiceMsg.innerText.slice(0, 16);
    switch (computer_weapon) {
        case 0:
            choiceMsg.innerText += ' Rock';
            break;
        case 1:
            choiceMsg.innerText += ' Paper';
            break;
        case 2:
            choiceMsg.innerText += ' Scissors';
            break;
    }
    

}

function showUserChoice(user_weapon) {
    choiceMsgUser.innerText = choiceMsgUser.innerText.slice(0, 11);
    switch (Number(user_weapon)) {
        case 0:
            choiceMsgUser.innerText += ' Rock';
            break;
        case 1:
            choiceMsgUser.innerText += ' Paper';
            break;
        case 2:
            choiceMsgUser.innerText += ' Scissors';
            break;
    }
    

}

const start = document.querySelector(".start");
start.addEventListener('click', createButtons, { once: true});

const restart = document.querySelector(".restart");
restart.addEventListener('click', () => {
    start.addEventListener('click', createButtons, { once: true });

    choiceMsgUser.innerText = choiceMsgUser.innerText.slice(0, 11);
    choiceMsg.innerText = choiceMsg.innerText.slice(0, 16);

    awayScore.innerText = awayScore.innerText.slice(0, 12);
    homeScore.innerText = homeScore.innerText.slice(0, 10);

    score1 = 0;
    score2 = 0;

    gameOverMsg.textContent = '';

})



