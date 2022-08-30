const firstPromiseCallback = () => console.log('promise callback 1');
const secondPromiseCallback = () => console.log('promise callback 2');
const thirdPromiseCallback = () => console.log('promise callback 3');
const fourthPromiseCallback = () => console.log('promise callback 4');

const firstProcessNextTickCallback = () => console.log('process.nextTick 1');
const secondProcessNextTickCallback = () => console.log('process.nextTick 2');
const thirdProcessNextTickCallback = () => console.log('process.nextTick 3');
const fourthProcessNextTickCallback = () => console.log('process.nextTick 4');

Promise.resolve().then(firstPromiseCallback);
process.nextTick(firstProcessNextTickCallback);
process.nextTick(secondProcessNextTickCallback);
Promise.resolve().then(secondPromiseCallback);
Promise.resolve().then(thirdPromiseCallback);
process.nextTick(thirdProcessNextTickCallback);
process.nextTick(fourthProcessNextTickCallback);
Promise.resolve().then(fourthPromiseCallback);
