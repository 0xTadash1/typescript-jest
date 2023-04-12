export class IntegerClosedRange {
    lower: number;
    upper: number;

    constructor(lower: number, upper: number) {
        if (lower > upper) {
            throw new Error("upper must be bigger than lower");
        }
        this.lower = lower;
        this.upper = upper;
    }

    toString(): string {
        return `[${this.lower}, ${this.upper}]`;
    }
}
