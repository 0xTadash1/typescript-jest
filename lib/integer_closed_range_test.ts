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

    describe("整数や閉区間が閉区間に含まれるかどうか判定する", () => {
        describe("下端点より上端点が大きい時", () => {
            it.each([
                {
                    name: "下端点が3、上端点が8の時、下端点より小さく、隣接している整数2は閉区間に含まれない",
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: 2,
                    expected: false,
                },
                {
                    name: "下端点が3、上端点が8の時、下端点と等しい整数3は閉区間に含まれる",
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: 3,
                    expected: true,
                },
                {
                    name: "下端点が3、上端点が8の時、上端点と等しい整数8は閉区間に含まれる",
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: 8,
                    expected: true,
                },
                {
                    name: "下端点が3、上端点が8の時、上端点より大きく、隣接している整数9は閉区間に含まれない",
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: 9,
                    expected: true,
                },
                {
                    name: "下端点が3、上端点が8の時、上端点より大きく、隣接している整数9は閉区間に含まれない",
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: 9,
                    expected: true,
                },
            ]);
        });

        describe("両端点が等しい時", () => {
            it.each([
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: 2,
                    expected: false,
                },
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: 3,
                    expected: true,
                },
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: 4,
                    expected: false,
                },
            ])(
                "閉区間[$instance.lower, $instance.upper]と整数$compareToを比較し、$expectedを返す",
                ({ instance, compareTo, expected }) => {
                    expect(instance.contains(compareTo)).toBe(expected);
                }
            );
        });
    });

    describe.skip("整数が閉区間に含まれるかどうか判定する", () => {
        describe("下端点より上端点が大きい時", () => {
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
        describe("下端点と上端点が等しい時", () => {
            describe("整数が両端点より小さく、隣接している時", () => {
                it("両端点が5の時、整数4は閉区間に含まれない", () => {
                    const integerClosedRange = new IntegerClosedRange(5, 5);

                    expect(integerClosedRange.contains(4)).toBe(false);
                });
            });

            describe("整数が両端点と等しい時", () => {
                it("両端点が5の時、整数5は閉区間に含まれる", () => {
                    const integerClosedRange = new IntegerClosedRange(5, 5);

                    expect(integerClosedRange.contains(5)).toBe(true);
                });
            });

            describe("整数が両端点より大きく、隣接している時", () => {
                it("両端点が5の時、整数6は閉区間に含まれる", () => {
                    const integerClosedRange = new IntegerClosedRange(5, 5);

                    expect(integerClosedRange.contains(6)).toBe(false);
                });
            });
        });
    });

    describe("別の閉区間と等価かどうか判定する", () => {
        describe("下端点より上端点が大きい時", () => {
            it.each([
                {
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: new IntegerClosedRange(2, 8),
                    expected: false,
                },
                {
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: new IntegerClosedRange(3, 8),
                    expected: true,
                },
                {
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: new IntegerClosedRange(4, 7),
                    expected: false,
                },
                {
                    instance: new IntegerClosedRange(3, 8),
                    compareTo: new IntegerClosedRange(3, 9),
                    expected: false,
                },
            ])(
                "閉区間[$instance.lower, $instance.upper]と閉区間[$compareTo.lower, $compareTo.upper]を比較し、$expectedを返す",
                ({ instance, compareTo, expected }) => {
                    expect(instance.equals(compareTo)).toBe(expected);
                }
            );
        });
        describe("下端点と上端点が等しい時", () => {
            it.each([
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: new IntegerClosedRange(2, 3),
                    expected: false,
                },
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: new IntegerClosedRange(3, 3),
                    expected: true,
                },
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: new IntegerClosedRange(3, 4),
                    expected: false,
                },
                {
                    instance: new IntegerClosedRange(3, 3),
                    compareTo: new IntegerClosedRange(2, 4),
                    expected: false,
                },
            ])(
                "閉区間[$instance.lower, $instance.upper]と閉区間[$compareTo.lower, $compareTo.upper]を比較し、$expectedを返す",
                ({ instance, compareTo, expected }) => {
                    expect(instance.equals(compareTo)).toBe(expected);
                }
            );
        });
    });
});
