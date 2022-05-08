const first = () => console.log('first');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (in a blocking loop)');

first();
setTimeout(second, 0);

const startTime = new Date();
const fiveMoreSeconds = 5000;
const endTime = new Date(startTime.getTime() + fiveMoreSeconds);

while (new Date() < endTime) {
  third();
}
