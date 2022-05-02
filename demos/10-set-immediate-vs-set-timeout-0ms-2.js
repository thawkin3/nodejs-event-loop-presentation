const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third');

setImmediate(first);
setTimeout(second, 0);
third();
