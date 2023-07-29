// learning state in js

// 1. Create a variable called `score` and set it equal to 0.
let score = 0;

// 2. Create a function called `increment` that adds 1 to the `score` variable.
function increment() {
  score++;
}

// 3. Create a function called `decrement` that subtracts 1 from the `score` variable.
function decrement() {
  score--;
}

// 4. Create four buttons that call either the `increment` or `decrement` functions when clicked.
// 5. Create an element that displays the `score` variable value, and update it whenever the `score` changes.
/*
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.textContent = score;

const incrementButton = document.getElementById('increment-button');
incrementButton.addEventListener('click', () => {
  increment();
  scoreDisplay.textContent = score;
}
);

const decrementButton = document.getElementById('decrement-button');
decrementButton.addEventListener('click', () => {
  decrement();
  scoreDisplay.textContent = score;
}
);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
}
);

const doubleButton = document.getElementById('double-button');
doubleButton.addEventListener('click', () => {
  score *= 2;
  scoreDisplay.textContent = score;
}
);
*/

// Lexical Scoping

let a = 1;
let b = 2;

function outer() {
  let a = 10;
  let b = 20;

  function inner() {
    let a = 100;
    let b = 200;

    console.log(a, b);
  }

  inner();
  console.log(a, b);
}

outer();  
console.log(a, b);