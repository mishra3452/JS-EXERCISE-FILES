console.log(2 == 2.0)
console.log(2 === 2.0)

console.log('' == '')

let myVar = ''
let myVarTwo = ''

console.log(myVar == myVarTwo)
console.log(myVar === myVarTwo)

// let anotherVar = {}
// let anotherVarTwo = {}

// console.log(anotherVar == anotherVarTwo) //fasle
// console.log(anotherVar === anotherVarTwo) //fasle

let anotherVar = {}
let anotherVarTwo = anotherVar

console.log(anotherVar == anotherVarTwo) //true
console.log(anotherVar === anotherVarTwo) //true

// == checks equality of content
// === checks equality of object

//for more example : http://www.java67.com/2013/07/difference-between-equality-strict-vs-operator-in-JavaScript-Interview-Question.html