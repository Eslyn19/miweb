console.log("Hello World");

const arr = [0, 1];

function Fibonacci(arr) {
  for (let i = 2; i < 7; i++){
    arr.add(arr[i - 1] + arr[i - 2]);
  }
return arr;}

// Print
console.log(Fibonacci(arr));