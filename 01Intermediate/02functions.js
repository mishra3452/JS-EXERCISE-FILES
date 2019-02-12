let myMultiplier = function(num1, num2) {
    return (num1 * num2)
}

console.log(myMultiplier(4, 5))

let guestUser = function(name = 'unName', courseCount = 0) {//default
    return 'Hello ' + name + ' and you course count ' + courseCount
}

console.log(guestUser())
console.log(guestUser('Jhon'))
console.log(guestUser('Jhon', 1))
