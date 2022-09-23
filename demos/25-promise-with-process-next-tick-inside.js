const promiseCallback1 = () => console.log('promise callback 1');
const promiseCallback2 = () => console.log('promise callback 2');
const promiseCallback3 = () => console.log('promise callback 3');

const processNextTickCallback1 = () => console.log('process.nextTick 1');
const processNextTickCallback2 = () => console.log('process.nextTick 2');
const processNextTickCallback3 = () => console.log('process.nextTick 3');

Promise.resolve().then(promiseCallback1);
Promise.resolve().then(promiseCallback2);
Promise.resolve().then(() => process.nextTick(processNextTickCallback2));
Promise.resolve().then(() => process.nextTick(processNextTickCallback3));
Promise.resolve().then(promiseCallback3);

process.nextTick(processNextTickCallback1);
