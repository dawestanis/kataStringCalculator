const stringCalculator = require('./stringCalculator');

describe('stringCalculator', () => {
    test('should print 0 if recive an empty quotes', () => {
        const expected = 0;
        const result = stringCalculator('');
        expect(expected).toBe(result);
    })

    test('should print 1 if recive a number', () => {
        const expected = 1;
        const result = stringCalculator('1');
        expect(expected).toBe(result);
    })

    test('should print the sum if recive two numbers separated by commas', ()=> {
        const expected = 3;
        const result = stringCalculator('1,2');
        expect(expected).toBe(result);
    })
});







