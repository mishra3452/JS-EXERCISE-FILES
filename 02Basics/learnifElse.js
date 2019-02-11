if (true) {
    console.log('I am inside the if block')
    console.log('I am still inside the if block')
}
if (false) {
    console.log('I am inside the if block')
    console.log('I am still inside the if block')
} else {
    console.log('I am inside the else block')
    console.log('I am still inside the else block')
}

if (false) {
    console.log('I am inside the if block')
    console.log('I am still inside the if block')
} else if (true) {
    console.log('I am inside If IN CAPS BLOCK')

} else {
    console.log('NOTICE THIS PART')
}



var whoISHere = 'user'

if (whoISHere === 'user') {
    console.log('Greeting message for user')
    console.log('allow access to view all courses')
} else if (whoISHere === 'teacher') {
    console.log('Greeting message for teacher')
    console.log('allow access to his courses')
} else {
    console.log('MESSAGE: please verify our email')
    console.log('send user an email for verification')
}