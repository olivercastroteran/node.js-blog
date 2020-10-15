// Global Object
console.log(global);

global.setTimeout(() => {
  console.log('time');
}, 3000);

setTimeout(() => {
  console.log('time 2');
  clearInterval(interval);
}, 5000);

const interval = setInterval(() => {
  console.log('interval');
}, 1000);

console.log(__dirname);
console.log(__filename);
