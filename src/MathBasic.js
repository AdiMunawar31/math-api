const MathBasic = {
    add: (...args) => {
        if (args.length !== 2) {
            throw new Error('the add function accepts only two parameters');
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('the add function accept only number parameters');
        }

        return a + b;
    },
    subtract: () => {

    },
    multiply: () => {

    },
    divide: () => {

    },
}

module.exports = MathBasic;