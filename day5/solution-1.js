const { moveInput, stackInput } = require('./input');


console.log("input", stackInput);

columns = {
    1: ['F', 'T', 'N', 'Z', 'M', 'G', 'H', 'J'],
    2: ['V', 'W', 'J', '', '', '', '', ''],
    3: ['V', 'W', 'J', '', '', '', '', ''],


}

moveInput.forEach(move => {
    const numCrates = parseInt(move[0]);
    const start = parseInt(move[1]);
    const finish = parseInt(move[2]);

    let count = 0;

    for (let i = 1; i < stackInput.length; i++) {
        const row = stackInput[stackInput.length - i];
        console.log("rows", (row[finish]));
        if (row[start]) {

        }
    }
})
