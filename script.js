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

// Testing Part 1 functions with varied values
console.log('Sum of Array:', sumArray([10, 20, 30, 40, 50])) // Expected output: 150
console.log('Average of Array:', averageArray([5, 10, 15])) // Expected output: 10
console.log(
  'Longest String:',
  longestString(['apple', 'banana', 'cherry', 'blueberry'])
) // Expected output: "blueberry"
console.log(
  'Strings Longer Than 4:',
  stringsLongerThan(['hi', 'welcome', 'to', 'JavaScript'], 4)
) // Expected output: ["welcome", "JavaScript"]

printNumbers(3) // Should print 1, 2, 3 in sequence

// Part 2: Thinking Methodically

const data = [
  { id: '100', name: 'Alice', occupation: 'Engineer', age: '35' },
  { id: '101', name: 'Zara', occupation: 'Pilot', age: '42' },
  { id: '102', name: 'Mike', occupation: 'Chef', age: '22' },
  { id: '103', name: 'Luna', occupation: 'Artist', age: '27' },
  { id: '104', name: 'Omar', occupation: 'Teacher', age: '29' },
]

// 1. Sort the array by age
const sortedByAge = data
  .slice()
  .sort((a, b) => parseInt(a.age) - parseInt(b.age))
console.log('Sorted by Age:', sortedByAge)

// 2. Filter the array to remove entries with an age greater than 30
const filteredByAge = data.filter((person) => parseInt(person.age) <= 30)
console.log('Filtered by Age <= 30:', filteredByAge)

// 3. Map the array to change "occupation" to "job" and increment each age by 1
const mappedData = data.map((person) => ({
  ...person,
  job: person.occupation,
  age: parseInt(person.age) + 1,
}))
console.log('Mapped Data (occupation to job and age incremented):', mappedData)

// 4. Calculate the sum of the ages using reduce, then calculate the average age
const totalAge = data.reduce((sum, person) => sum + parseInt(person.age), 0)
const averageAge = totalAge / data.length
console.log('Total Age:', totalAge)
console.log('Average Age:', averageAge)

// Part 3: Thinking Critically

// 1. Function to take an object and increment its age field
function incrementAge(obj) {
  if (!obj.hasOwnProperty('age')) obj.age = 0
  obj.age++
  obj.updated_at = new Date()
  return obj
}

// 2. Function to take an object, make a copy, increment the age field in the copy, and return the copy
function copyAndIncrementAge(obj) {
  const newObj = {
    ...obj,
    age: obj.age ? obj.age + 1 : 1,
    updated_at: new Date(),
  }
  return newObj
}

// Testing Part 3 functions with new objects
const personWithAge = { name: 'John Doe', age: 50 }
const personWithoutAge = { name: 'Jane Smith' }

console.log('Original person with age:', personWithAge)
console.log('Incremented age in original:', incrementAge(personWithAge)) // Should increment age to 51
console.log('Original person without age:', personWithoutAge)
console.log(
  'Copied and incremented age in person without age:',
  copyAndIncrementAge(personWithoutAge)
) // Should set age to 1 and add updated_at
console.log('Original person after copy function:', personWithoutAge) // Verify age wasn't changed in original

// Part 4 & Part 5: Practical Applications and Reflection

// Additional Testing of Part 1 functions to confirm reusability
console.log('Sum of Array:', sumArray([1, 2, 3, 4, 5])) // Expected output: 15
console.log('Average of Array:', averageArray([1, 2, 3, 4, 5])) // Expected output: 3
console.log('Longest String:', longestString(['short', 'longer', 'longest'])) // Expected output: "longest"
console.log(
  'Strings Longer Than 3:',
  stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)
) // Expected output: ["hello", "morning"]

// Confirming recursive function behavior
printNumbers(5) // Should print 1, 2, 3, 4, 5 in sequence
