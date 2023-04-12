export class IntegerClosedRange {
    lower: number;
    upper: number;

    constructor(lower: number, upper: number) {
        if (Number.isInteger(lower) === false) {
            throw new Error("lower must be integer");
        }
        if (Number.isInteger(upper) === false) {
            throw new Error("upper must be integer");
        }

        if (lower > upper) {
            throw new Error("upper must be bigger than lower");
        }
        this.lower = lower;
        this.upper = upper;
    }

    toString(): string {
        return `[${this.lower}, ${this.upper}]`;
    }

    contains(num: number): boolean {
        if (this.lower <= num && num <= this.upper) {
            return true;
        }

        return false;
    }
}
