import { IntegerClosedRange } from "./integer_closed_range";

describe("整数閉区間オブジェクトのテスト", () => {
    describe("コンストラクタのテスト", () => {
        describe("下端点が上端点未満である時", () => {
            it("オプジェクトを生成できる", () => {
                const integerClosedRange = new IntegerClosedRange(3, 8);

                expect(integerClosedRange).toBeInstanceOf(IntegerClosedRange);
            });
        });

        describe("下端点が上端点と等しい時", () => {
            it("オプジェクトを生成できる", () => {
                const integerClosedRange = new IntegerClosedRange(3, 3);

                expect(integerClosedRange).toBeInstanceOf(IntegerClosedRange);
            });
        });

        describe("下端点が上端点より大きい時", () => {
            it("オプジェクトを生成できずErrorとなる", () => {
                expect(() => new IntegerClosedRange(8, 3)).toThrow(Error);
            });
        });

        describe("下端点のみが小数である時", () => {
            it("オブジェクトを生成できずErrorとなる", () => {
                expect(() => new IntegerClosedRange(3.3, 8)).toThrow(Error);
            });
        });

        describe("上端点のみが小数である時", () => {
            it("オブジェクトを生成できずErrorとなる", () => {
                expect(() => new IntegerClosedRange(3, 8.8)).toThrow(Error);
            });
        });
    });

    describe("下端点と上端点の文字列表現を返す", () => {
        it("下端点が3、上端点が8のとき文字列`[3, 8]`を返す", () => {
            const integerClosedRange = new IntegerClosedRange(3, 8);

            expect(integerClosedRange.toString()).toBe("[3, 8]");
        });
    });

    describe("整数が閉区間に含まれるかどうか判定する", () => {
        describe("整数が下端点より小さく、隣接している時", () => {
            it("下端点が3、上端点が8の時、整数2は閉区間に含まれない", () => {
                const integerClosedRange = new IntegerClosedRange(3, 8);

                expect(integerClosedRange.contains(2)).toBe(false);
            });
        });

        describe("整数が下端点と等しい時", () => {
            it("下端点が3、上端点が8の時、整数3は閉区間に含まれる", () => {
                const integerClosedRange = new IntegerClosedRange(3, 8);

                expect(integerClosedRange.contains(3)).toBe(true);
            });
        });

        describe("整数が上端点と等しい時", () => {
            it("下端点が3、上端点が8の時、整数8は閉区間に含まれる", () => {
                const integerClosedRange = new IntegerClosedRange(3, 8);

                expect(integerClosedRange.contains(8)).toBe(true);
            });
        });

        describe("整数が上端点より大きく、隣接している時", () => {
            it("下端点が3、上端点が8の時、整数9は閉区間に含まれない", () => {
                const integerClosedRange = new IntegerClosedRange(3, 8);

                expect(integerClosedRange.contains(9)).toBe(false);
            });
        });
    });
});
