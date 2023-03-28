# 3y3
Hide text in plain sight, using invisible characters.

# Credit
Credit goes to https://synthetic.garden/3y3.htm

I only re-implemented their algorithm into ease-to-use encode/decode functions.

Here is the message left by the dev:
```
Made by Twilight Sparkle (@yourcompanionAI).

Please do not reimplement without crediting me!
I know the method is simple... but I'm the one who did it first!
Let me hang out on your credits list! 
```

I don't really know who that is, or their github profile, so thats the only credit I can give.
 
The original source-code is ugly to say the least...

```js
function secondsightify(t) {
	if([...t].some(x=>(0xe0000<x.codePointAt(0)&&x.codePointAt(0)<0xe007f))) { document.querySelector('#conversion').innerText="3y3 text detected. Revealing...";return (t=>([...t].map(x=>(0xe0000<x.codePointAt(0)&&x.codePointAt(0)<0xe007f)?String.fromCodePoint(x.codePointAt(0)-0xe0000):x).join``))(t) } 
	else { document.querySelector('#conversion').innerHTML="No 3y3 text detected. Concealing...<br/><small>It'll appear empty. Press Ctrl-A and copy to get your hidden text.</small>";return (t=>[...t].map(x=>(0x00<x.codePointAt(0)&&x.codePointAt(0)<0x7f)?`${String.fromCodePoint(x.codePointAt(0)+0xe0000)}`:x).join``)(t) }
}
```

Even when you beautify it and clean it up it is still ugly

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

So I decided to publish a refactored version online, I only made it prettier, not better.
You can find it [here](https://github.com/ArjixWasTaken/3y3/blob/main/3y3.js).
