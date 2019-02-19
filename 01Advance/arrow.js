const sayHello = function(name){
    return 'Hey there, ' +  name + ' !'
}

console.log(sayHello('Learners'))


//arrow funtion
const sayHelloArrow = (name) => {
    return 'Hey there, ' +  name + ' !'
}

console.log(sayHelloArrow('Learners'))

//again arrow
const sayHelloArrowAgain = (name) => 'Hey there, ' +  name + ' !'

console.log(sayHelloArrowAgain('Learners'))


const todos = [{
    title: 'Bye bread',
    isDone: true,
}, {
    title: 'Go to gym',
    isDone: true,
}, {
    title: 'Record youtube video',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone)


const todosAgain = [{
    title: 'Bye bread',
    isDone: true,
}, {
    title: 'Go to gym',
    isDone: true,
}, {
    title: 'Record youtube video',
    isDone: false,
}, {
    title: 'Play pubg',
    isDone: false,
}, {
    title: 'Codechef',
    isDone: true,
}, {
    title: 'Hackerrank',
    isDone: false,
}]

const thingsNotDone = todosAgain.filter((todos) => todos.isDone === false)

console.log(thingsNotDone.title)