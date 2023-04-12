import { IntegerClosedRange } from "./integer_closed_range";

describe("整数閉区間オブジェクトのテスト", () => {
    describe("整数閉区間オブジェクトが持つ、下端点と上端点の文字列表現を返す", () => {
        it("下端点が3、上端点が8のとき文字列`[3, 8]`を返す", () => {
            const integerClosedRange = new IntegerClosedRange(3, 8);

            expect(integerClosedRange.toString()).toBe("[3, 8]");
        });
    });
});
