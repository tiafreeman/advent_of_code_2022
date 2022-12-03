const { input } = require('./input');

let sum = 0;
input.forEach(sack => {
    const half = sack.length / 2;
    const firstHalf = sack.slice(0, half);
    const secondHalf = sack.slice(half);

    const duplicateValues = firstHalf.filter(value => secondHalf.includes(value));

    const duplicate = duplicateValues[0]

    if (duplicate.toUpperCase() === duplicate) {
        sum += duplicate.charCodeAt(0) - 38;
    } else {
        sum += duplicate.charCodeAt(0) - 96;
    }

});

console.log('sum is', sum);