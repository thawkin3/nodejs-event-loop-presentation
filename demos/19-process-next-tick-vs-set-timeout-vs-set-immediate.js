const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (process.nextTick)');
const fourth = () => console.log('fourth');

setImmediate(first);
setTimeout(second, 0);
process.nextTick(third);
fourth();
