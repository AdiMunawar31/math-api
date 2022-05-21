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
    subtract: (...args) => {
        if (args.length !== 2) {
            throw new Error('the subtract function accepts only two parameters');
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('the subtract function accept only number parameters');
        }

        return a + b;
    },
    multiply: (...args) => {
        if (args.length !== 2) {
            throw new Error('the multiply function accepts only two parameters');
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('the multiply function accept only number parameters');
        }

        return a + b;
    },
    divide: (...args) => {
        if (args.length !== 2) {
            throw new Error('the divide function accepts only two parameters');
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('the divide function accept only number parameters');
        }

        return a + b;
    },
}

module.exports = MathBasic;