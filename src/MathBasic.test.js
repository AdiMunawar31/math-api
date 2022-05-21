const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
    it('should contains add, subtract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add');
        expect(MathBasic).toHaveProperty('subtract');
        expect(MathBasic).toHaveProperty('multiply');
        expect(MathBasic).toHaveProperty('divide');
        expect(MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic.subtract).toBeInstanceOf(Function);
        expect(MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic.divide).toBeInstanceOf(Function);
    });

});

describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
        expect(() => MathBasic.add()).toThrowError();
        expect(() => MathBasic.add(1)).toThrowError();
        expect(() => MathBasic.add(1, 2, 3)).toThrowError();
        expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
        expect(() => MathBasic.add('1', '2')).toThrowError();
        expect(() => MathBasic.add(true, {})).toThrowError();
        expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
        expect(MathBasic.add(4, 4)).toEqual(8);
        expect(MathBasic.add(16, 8)).toEqual(24);
        expect(MathBasic.add(3, 7)).toEqual(10);
    });
});

describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
        expect(() => MathBasic.subtract()).toThrowError();
        expect(() => MathBasic.subtract(1)).toThrowError();
        expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
        expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
        expect(() => MathBasic.subtract('1', '2')).toThrowError();
        expect(() => MathBasic.subtract(true, {})).toThrowError();
        expect(() => MathBasic.subtract(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
        expect(MathBasic.subtract(4, 4)).toEqual(8);
        expect(MathBasic.subtract(16, 8)).toEqual(24);
        expect(MathBasic.subtract(3, 7)).toEqual(10);
    });

});
