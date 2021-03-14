export default class Calculator {
    static sum(...args: number[]): number {
        return args.slice(1, args.length)
            .reduce((result: number, nextValue: number): number => result + nextValue, args[0]);
    }

    static substruct(...args: number[]): number {
        return args.slice(1, args.length)
            .reduce((result: number, nextValue: number): number => result - nextValue, args[0]);
    }
}
