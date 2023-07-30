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
