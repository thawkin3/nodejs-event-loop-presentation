const first = () => console.log('first');
const second = () => console.log('second (setImmediate)');
const third = () => console.log('third');

first();
setImmediate(second);
third();
