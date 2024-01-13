
function game() {
    let user_choice;
    let computer_choice;

    let score1 = 0;
    let score2 = 0;

    while ((score1 != 3) && (score2 != 3)) {
        user_choice = prompt("Choose rock (0), paper (1), scissors (2): ");
        computer_choice = Math.floor(Math.random() * 2);

        switch (select_winner(user_choice, computer_choice)) {
            case 1:
                score1 += 1;
                console.log(`Your score is ${score1}.`);
                break;
            case 2:
                score2 += 1;
                console.log(`My score is ${score2}.`);
                break;
        }
    }

    gameOver(score1, score2);

}

function select_winner(choice1, choice2) {
    let winner = (3 + choice1 - choice2) % 3;


    switch (winner) {
        case 0:
            console.log("That's a draw!");
            return 0;
        case 1:
            console.log("You win!");
            return 1;
        case 2:
            console.log("You lose!");
            return 2;
    }
}

function gameOver(score1, score2) {
    if (score1 > score2) {
        console.log("Game Over! You win :(");
    } else {
        console.log("Game over! I win :)");
    }
}

const start = document.querySelector(".start");

start.addEventListener('click', () => game());

