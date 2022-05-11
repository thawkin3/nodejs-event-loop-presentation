const firstThen = () => console.log('promise callback 1');
const secondThen = () => console.log('promise callback 2');
const third = () => console.log('process.nextTick');

Promise
  .resolve()
  .then(firstThen)
  .then(secondThen);

process.nextTick(third);
