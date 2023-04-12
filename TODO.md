# TDD研修

## 問題文

整数閉区間を示すクラス（あるいは構造体）をつくりたい。整数閉区間オブジェクトは下端点と上端点を持ち、文字列表現も返せる（例: 下端点 3, 上端点 8 の整数閉区間の文字列表記は `"[3,8]"`）。ただし、上端点より下端点が大きい閉区間を作ることはできない。整数の閉区間は指定した整数を含むかどうかを判定できる。また、別の閉区間と等価かどうかや、完全に含むかどうかも判定できる。

## 整理

- 下端点と上端点を持ち
  - lower, upperを持つ
  - 常に　lower < upper
  - lower == upper の時は？
    - 閉区間だしありなのかな
    - このエッジケーステストしがいがありそう
- 文字列表現を返せる
  - [lower, upper]
- 指定した整数を含むかどうかを判定できる
  - contain的な？
- 別の閉区間と等価かどうかや
  - 等価演算子で比較？
  - できるならしたい
  - 無理そうならメソッドでboolで返す
- 完全に含むかどうかも判定できる
  - こいつを整数の比較とは別の関数で切り出すか、まとめてしまうか
  - boolで返すのか、共通のrangeを返すのか

## 要件
- オブジェクトは整数`lower`と`upper`をもつ
- `[lower, upper]`の形式の文字列を返すメソッドをもつ
- 共通のrangeを返すメソッドを実装する
  - これを利用して、別の閉区間と等価かどうか
  - 別の閉区間を完全に含むかどうか 判定できるメソッドをもつ