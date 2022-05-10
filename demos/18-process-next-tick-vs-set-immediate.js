const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (process.nextTick)');
const third = () => console.log('third');

setImmediate(first);
process.nextTick(second);
third();
