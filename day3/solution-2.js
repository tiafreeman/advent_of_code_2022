const { input } = require('./input');

let sum = 0;

for (let i = 0; i < input.length; i += 3) {
    const first = input[i];
    const second = input[i + 1];
    const third = input[i + 2];

    const duplicateValues = first.filter(value => second.includes(value) && third.includes(value));

    const duplicate = duplicateValues[0];

    if (duplicate.toUpperCase() === duplicate) {
        sum += duplicate.charCodeAt(0) - 38;
    } else {
        sum += duplicate.charCodeAt(0) - 96;
    }

}

console.log('sum is', sum);