const firstThen = () => console.log('promise callback 1');
const secondThen = () => console.log('promise callback 2');
const third = () => console.log('third');

Promise
  .resolve()
  .then(firstThen)
  .then(secondThen);

third();
