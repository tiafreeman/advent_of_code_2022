const { input } = require('./input');

let combinedValues = [];

input.forEach(item => {
    const sum = item.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0)

    combinedValues.push(sum);
});

const highestValues = combinedValues.sort((a, b) => a - b).slice(combinedValues.length - 3);

const sumHighest = highestValues.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)


console.log("highest values:", sumHighest);