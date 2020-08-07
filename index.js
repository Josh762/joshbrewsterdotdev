console.log('Find what you\'re looking for?');


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];

    document.addEventListener('keydown', event => {
        const inputs = ['arrowup', 'arrowright', 'arrowdown', 'arrowleft', 'b', 'a', 'enter']
        const konami_code = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a', 'enter']
        const key = event.key.toLowerCase();

        if (inputs.indexOf(key) === -1) return;
        buffer.push(key);
        if (buffer[buffer.length - 1] !== konami_code[buffer.length - 1]) buffer = [];
        else if (buffer.length === 11 && buffer[buffer.length - 1] === 'enter') {
            alert("do something cool")
        }
    });
});
