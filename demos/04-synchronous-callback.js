const first = () => console.log('first');
const second = (callback) => {
  console.log('second');
  callback();
};
const third = () => console.log('third (called by second)');
const fourth = () => console.log('fourth');

first();
second(third);
fourth();
