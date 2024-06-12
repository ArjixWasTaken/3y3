# 3y3
Hide text in plain sight, using invisible characters.

# Credit
Credit goes to [@yourcompanionAI](https://github.com/twilight-sparkle-irl), source: https://synthetic.garden/3y3.htm

I only re-implemented their algorithm into easy-to-use encode/decode functions. <br />
Below is the original source code:
```js
function secondsightify(t) {
    if ([...t].some(x => (0xe0000 < x.codePointAt(0) && x.codePointAt(0) < 0xe007f))) {
        // 3y3 text detected. Revealing...
        return (t => ([...t].map(x => (0xe0000 < x.codePointAt(0) && x.codePointAt(0) < 0xe007f) ? String.fromCodePoint(x.codePointAt(0) - 0xe0000) : x).join("")))(t)
    } else {
        // No 3y3 text was found, Encoding...
        return (t => [...t].map(x => (0x00 < x.codePointAt(0) && x.codePointAt(0) < 0x7f) ? String.fromCodePoint(x.codePointAt(0)+0xe0000) : x).join(""))(t)
    }
}
```
