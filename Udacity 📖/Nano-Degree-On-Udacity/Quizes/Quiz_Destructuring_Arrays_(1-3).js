/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const one = 'red';
const two = 'green';
const three = 'blue';

const [
    one: 'red',
    two: 'green',
    three: 'blue',
    ] = colors;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
