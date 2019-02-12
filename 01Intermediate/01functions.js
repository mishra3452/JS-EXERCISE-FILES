let sayhello = function (name) {
    console.log('Greeting message for user')
    console.log(`Hey ${name}`)
}

sayhello('John')

let fullnameMaker = function(firstname, lastname) {
    console.log('Welcome to my kingdom')
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

fullnameMaker('John', 'Doe')

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

console.log(myAdder(3, 5))

let result = myAdder(3, 5)
console.log(result)