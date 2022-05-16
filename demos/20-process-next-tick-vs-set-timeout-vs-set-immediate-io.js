const fs = require('fs');

const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (process.nextTick)');
const fourth = () => console.log('fourth');

fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  setImmediate(first);
  setTimeout(second, 0);
  process.nextTick(third);
  fourth();
});
