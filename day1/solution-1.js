const { input } = require('./input');

let highest = 0;

input.forEach(item => {
    const sum = item.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0)

    if (sum > highest) {
        highest = sum;
    }
});

console.log("highest value:", highest);