const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setTimeout(second, 0);
third();
