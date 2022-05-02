const first = () => console.log('first');

let count = 0;

const second = () => {
  console.log('second (setInterval)');
  count++;

  if (count >= 5) {
    clearInterval(myInterval);
  }
};

const third = () => console.log('third');

first();
const myInterval = setInterval(second, 0);
third();
