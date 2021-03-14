"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    static sum(...args) {
        return args.slice(1, args.length)
            .reduce((result, nextValue) => result + nextValue, args[0]);
    }
    static substruct(...args) {
        return args.slice(1, args.length)
            .reduce((result, nextValue) => result - nextValue, args[0]);
    }
}
exports.default = Calculator;
