function checkNumber(number) {
  if (typeof number === "number" && !isNaN(number)) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  } else {
    console.log(`"${number}" is not a number, please use a number`);
  }
}

checkNumber(3);
checkNumber(5);
checkNumber(15);
checkNumber(16);
checkNumber(NaN);
checkNumber("Hello world");
