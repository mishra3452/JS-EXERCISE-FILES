const myTodos = ['Buy Bread', 'Go to Gym', 'Record Youtube videos']

console.log(myTodos.indexOf('Buy Bread'))

const newToDos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record Youtube videos',
    isDone: true,
}]

//  const index = newToDos.findIndex(function(todo, index) {
//      console.log(todo);
//      return todo.title === 'Go to Gym'
//  })
//  console.log(index);

//Method1

// const findTodo = function(anyTodos, title){
//     const index = anyTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return anyTodos[index]
// }

// let printMe = findTodo(newToDos, 'Go to gym')
// console.log(printMe)


const findTodo = function(findTodos, title){
    const titleReturned = findTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newToDos, 'Go to gym')
console.log(printMe)