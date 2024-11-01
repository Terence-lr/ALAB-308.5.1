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

// Part 2: Thinking Methodically

const data = [
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
]

// 1. Sort the array by age
const sortedByAge = data
  .slice()
  .sort((a, b) => parseInt(a.age) - parseInt(b.age))
console.log('Sorted by Age:', sortedByAge)

// 2. Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter((person) => parseInt(person.age) <= 50)
console.log('Filtered by Age <= 50:', filteredByAge)

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

// Testing Part 3 functions
const person = { name: 'Sample Person' }
console.log('Original person object:', person)
console.log('Incremented age in original:', incrementAge(person))
console.log('Copied and incremented age:', copyAndIncrementAge(person))
console.log('Original person after copy function:', person)

// Part 4 & Part 5: Practical Applications and Reflection

// Example usage for testing
console.log('Sum of Array:', sumArray([1, 2, 3, 4, 5])) // Should output 15
console.log('Average of Array:', averageArray([1, 2, 3, 4, 5])) // Should output 3
console.log('Longest String:', longestString(['short', 'longer', 'longest'])) // Should output "longest"
console.log(
  'Strings Longer Than 3:',
  stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)
) // ["hello", "morning"]

printNumbers(5) // Should print numbers 1 to 5 recursively
