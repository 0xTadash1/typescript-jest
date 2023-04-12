export class IntegerClosedRange {
    lower: number;
    upper: number;

    constructor(lower: number, upper: number) {
        this.lower = lower;
        this.upper = upper;
    }

    toString(): string {
        return `[${this.lower}, ${this.upper}]`;
    }
}
