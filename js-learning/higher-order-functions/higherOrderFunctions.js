// to practice Higher Order Functions in JavaScript.

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

function coolCities(cities) {
  return cities.filter(city => city.temperature < 70);
}


// composable functions practice

// 1. Write a function called `multiplyByTwo` that takes in a number and returns that number multiplied by two.
function multiplyByTwo(num) {
  return num * 2;
}

// 2. Write a function called `addThree` that takes in a number and returns that number plus three.
function addThree(num) {
  return num + 3;
}

// 3. Write a function called `divideByFive` that takes in a number and returns that number divided by five.
function divideByFive(num) {
  return num / 5;
}

// 4. Write a function called `addTwoNumbers` that takes in two numbers and returns the sum of those numbers.
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// 5. Write a function called `compose` that takes in a number, and two functions, `multiplyByTwo` and `addThree`, and returns the number multiplied by two and then added to three.

function compose(num, multiplyByTwo, addThree) {
  return addThree(multiplyByTwo(num));
}

// 6. What's the result of calling `compose(5, multiplyByTwo, addThree)`?
// 13

// 7. What's the result of calling `compose(10, multiplyByTwo, divideByFive)`?
// 4

// 8. What's the result of calling `compose(5, addThree, divideByFive)`?
// 4

// 9. What's the result of calling `compose(5, addThree, multiplyByTwo)`?

// 13
