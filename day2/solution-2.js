const { input } = require('./input');

let score = 0;

const loseObject = {
    'A': 'C',
    'B': 'A',
    'C': 'B'

}

const winObject = {
    'A': 'B',
    'B': 'C',
    'C': 'A',
}


input.forEach(line => {
    let playerChoice = '';
    const opponent = line[0];
    const outcome = line[1];
    if (outcome === 'X') {
        playerChoice = loseObject[opponent];
    }
    if (outcome === 'Y') {
        playerChoice = opponent;
        score += 3;
    }
    if (outcome === 'Z') {
        playerChoice = winObject[opponent];
        score += 6
    }

    if (playerChoice === 'A') {
        score += 1;
    }
    if (playerChoice === 'B') {
        score += 2;
    }
    if (playerChoice === 'C') {
        score += 3;
    }


});

console.log('score is', score);