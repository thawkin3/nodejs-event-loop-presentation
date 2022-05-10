const first = () => console.log('first (setTimeout)');
const second = () => console.log('second (process.nextTick)');
const third = () => console.log('third');

setTimeout(first, 0);
process.nextTick(second);
third();
