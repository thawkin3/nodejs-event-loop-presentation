const first = () => console.log('first (setTimeout)');
const second = () => console.log('second (setImmediate)');
const third = () => console.log('third');

setTimeout(first, 0);
setImmediate(second);
third();
