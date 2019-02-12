const numbers = ['one', 'two', 'three', 'four', 'five', 'six']

// numbers[1] = 'something'

// console.log(numbers)

//start

// console.log(numbers.shift()) //remove the first number and return it
// console.log(numbers)

// numbers.unshift('something') //add at the first place
// console.log(numbers)

//end

// console.log(numbers.pop()) //pops and returns the last value
// console.log(numbers)

// numbers.push('seven') //add a new value at the end
// console.log(numbers)


//middle

numbers.splice(2, 1, 'something') //start from 2 and delete 1 element and replace with something
console.log(numbers)

numbers.splice(2, 2, 'something') //start from 2nd position and delete 2 elements and replace 1st element with something