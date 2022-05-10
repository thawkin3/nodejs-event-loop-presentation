const first = () => console.log('first');
const second = () => {
  console.log('second');
  third();
};
const third = () => console.log('third (called by second)');
const fourth = () => console.log('fourth');

first();
second();
fourth();
