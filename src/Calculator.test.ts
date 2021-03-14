import { assert } from 'chai';
import Calculator from './Calculator';

describe('Поверка бозвых функций калькулятора', () => {
    it('Проверка функции Calculator.sum', () => {
        assert.equal(Calculator.sum(1, 2, 3), 1 + 2 + 3);
    });

    it('Проверка функции Calculator.substruct', () => {
        assert.equal(Calculator.substruct(3, 2, 1), 3 - 2 - 1);
        assert.equal(Calculator.substruct(1, 2, 3), 1 - 2 - 3);
    });
});
