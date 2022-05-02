const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setImmediate(second);
third();
