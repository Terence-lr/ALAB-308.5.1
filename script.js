// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally

// 1. Function to take an array of numbers and return the sum
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}
// 2. Function to take an array of numbers and return the average
function averageArray(numbers) {
  return sumArray(numbers) / numbers.length
}

// 3. Function to take an array of strings and return the longest string
function longestString(strings) {
  return strings.reduce(
    (longest, str) => (str.length > longest.length ? str : longest),
    ''
  )
}

// 4. Function to take an array of strings and a number, returning strings longer than that number
function stringsLongerThan(strings, length) {
  return strings.filter((str) => str.length > length)
}

// 5. Recursive function to print every number from 1 to n
function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1)
    console.log(n)
  }
}
