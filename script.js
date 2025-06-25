function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Take input from user
const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

if (!isNaN(number) && number >= 0 && number <= 10000) {
  const result = trailingZeros(number);
  alert("Number of trailing zeros in " + number + "! is: " + result);
} else {
  alert("Invalid input. Please enter a number between 0 and 10000.");
}
