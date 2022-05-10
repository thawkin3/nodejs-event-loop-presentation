const fs = require('fs');

const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');

fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);

  setImmediate(first);
  setTimeout(second, 0);
  setImmediate(first);
  setTimeout(second, 0);
  setTimeout(second, 0);
  setImmediate(first);
  setImmediate(first);
  setTimeout(second, 0);
});
