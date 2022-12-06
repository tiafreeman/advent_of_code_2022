const path = require('path');
const fs = require('fs');

const moveInput = fs
    .readFileSync(path.join(__dirname, 'move-input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(item => item.split(' ').filter(instructions => {
        const num = parseInt(instructions);
        return !isNaN(num);
    }));

const stackInput = fs
    .readFileSync(path.join(__dirname, 'stack-input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(item => item.split(' '))


module.exports = {
    moveInput,
    stackInput,
};