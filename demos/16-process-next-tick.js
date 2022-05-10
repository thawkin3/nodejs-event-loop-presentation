const first = () => console.log('first');
const second = () => console.log('second (process.nextTick)');
const third = () => console.log('third');

first();
process.nextTick(second);
third();
