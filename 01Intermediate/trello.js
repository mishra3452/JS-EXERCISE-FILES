const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0])

// let sayHello = function() {
//     console.log("Greeting message for user")
// }

// days.forEach(sayHello)

days.forEach(function(variable1, variable2) {
         console.log(`starts with ${variable2+1} -- ${variable1}`)
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

months.forEach(function(mon, index) {
    console.log(`Month number ${index+1} -- ${mon}`)
})