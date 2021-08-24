
// answer[i] == "FizzBuzz" // if i is divisible by 3 and 5.
// answer[i] == "Fizz" // if i is divisible by 3.
// answer[i] == "Buzz" // if i is divisible by 5.
// answer[i] == i // if non of the above conditions are true.

fizzBuzz = (input) => {
    let result = [];
  
    for (let i = 1; i <= input; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    console.log(result);
  };
  
  fizzBuzz(3);
  fizzBuzz(15);
  