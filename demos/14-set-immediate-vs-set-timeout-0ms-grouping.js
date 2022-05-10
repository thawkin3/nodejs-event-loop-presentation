const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');

setImmediate(first);
setTimeout(second, 0);
setImmediate(first);
setTimeout(second, 0);
setTimeout(second, 0);
setImmediate(first);
setImmediate(first);
setTimeout(second, 0);
