const firstSetTimeout = () => console.log('setTimeout 1');

const secondSetTimeout = () => {
  console.log('setTimeout 2');
  process.nextTick(firstProcessNextTick);
  process.nextTick(secondProcessNextTick);
};

const thirdSetTimeout = () => console.log('setTimeout 3');

const firstProcessNextTick = () => console.log('process.nextTick 1');
const secondProcessNextTick = () => console.log('process.nextTick 2');
const thirdProcessNextTick = () => console.log('process.nextTick 3');

setTimeout(firstSetTimeout, 0);
setTimeout(secondSetTimeout, 0);
setTimeout(thirdSetTimeout, 0);
process.nextTick(thirdProcessNextTick);
