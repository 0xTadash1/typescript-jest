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
    });
    describe("下端点と上端点の文字列表現を返す", () => {
        it("下端点が3、上端点が8のとき文字列`[3, 8]`を返す", () => {
            const integerClosedRange = new IntegerClosedRange(3, 8);

            expect(integerClosedRange.toString()).toBe("[3, 8]");
        });
    });
});
