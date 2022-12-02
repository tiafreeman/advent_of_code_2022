const { input } = require('./input');

const convertOpponent = (value) => {
    if (value === 'A') {
        return 'X';
    }
    if (value === 'B') {
        return 'Y';
    }
    if (value === 'C') {
        return 'Z';
    }
}

const determineWinner = (opponent, me) => {
    const convertedOpponent = convertOpponent(opponent);
    if (convertedOpponent === me) {
        return 3;
    }
    if (convertedOpponent === 'X') {
        if (me === 'Y') {
            return 6;
        }
        if (me === 'Z') {
            return 0;
        }
    }

    if (convertedOpponent === 'Y') {
        if (me === 'X') {
            return 0;
        }
        if (me === 'Z') {
            return 6;
        }
    }

    if (convertedOpponent === 'Z') {
        if (me === 'Y') {
            return 0;
        }
        if (me === 'X') {
            return 6;
        }
    }
}

let score = 0;


input.forEach(line => {
    if (line[1] === 'X') {
        score += 1;
    }
    if (line[1] === 'Y') {
        score += 2;
    }
    if (line[1] === 'Z') {
        score += 3;
    }

    score += determineWinner(line[0], line[1]);

});

console.log('score is', score);