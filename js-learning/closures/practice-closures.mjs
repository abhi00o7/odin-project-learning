// javaScript closures practice

// 1. Write a function that would allow you to do this:
// let addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(base) {
  return function (num) {
    return base + num;
  };
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// 2. Rewrite the following code to use a 'for' loop instead of a 'while' loop.
// You should still log the same sentence to the console.
// let x = 9;
// while (x >= 1) {
//   console.log('hello ' + x);
//   x = x - 1;
// }

for (let x = 9; x >= 1; x--) {
  console.log('hello ' + x);
}

// 3. Write a function which takes an array of city objects like such:
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
// let cities = [
//   { name: 'Los Angeles', temperature: 60.0 },
//   { name: 'Atlanta', temperature: 52.0 },


