const first = () => console.log('first (setTimeout)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (setTimeout)');

setTimeout(first, 500);
setTimeout(second, 500);
setTimeout(third, 500);
