const { input } = require('./input');

for (let i = 0; i < input.length - 13; i++) {
    const letters = new Set();
    for (let j = 0; j < 14; j ++) {
        letters.add(input[i + j]);
    }

    if (letters.size === 14) {
        console.log("answer", letters, i + 14);
        break;
    }

}