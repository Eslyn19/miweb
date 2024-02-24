console.log("Hello World");

const arr = [0, 1];

function Fibonacci (arr) {
  for (let i = 2; i < 7; i++){
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;  
}

console.log(Fibonacci(arr));