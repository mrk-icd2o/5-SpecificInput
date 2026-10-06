# Lesson 5 - Specific Input

We have learned about built-in functions such as `keyPressed()` that run when any key is pressed. But how can we program different functionality for different keys?

## key and keyCode

We previously learned about `key` (which stores the last key pressed) and `keyCode` (the same thing, but for special keys). We can now combine our knowledge of if statements with these variables:

```javascript
// If a key is being pressed AND the key is "r"
// What about capital letters???
if(keyIsPressed == true && key == 'r'){
  fill(255, 0, 0);
}

// If the last pressed key is "g"
else if(key == 'g' || key == 'G'){
  fill(0, 255, 0);
}

else if(keyCode == ENTER){
  fill(0, 0, 255);
}

else{
  fill(0);
}
```

Note that `key` is case sensitive. Checking for `'g'` alone will not catch a capital `G`, which is why both are checked with `||`.

Special keys (ENTER, SHIFT, the arrow keys, and so on) do not produce a normal character, so they are checked with `keyCode` instead.

## mouseButton

The same idea works for the mouse. `mouseButton` stores which button is being used:

```javascript
if(mouseButton == LEFT){
  rect(0, 0, 100, 100);
}
```

## Reference

Visit [the p5.js keyCode reference](https://p5js.org/reference/p5/keyCode/) and [keycode.info](https://www.toptal.com/developers/keycode) to see the different values that `keyCode` can handle.
