const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to gym')

myTodos.forEach(function(todo, index){
    console.log(`Your task number ${index+1} is: ${todo}`)
})

myTodos.unshift('Buy Books')
myTodos.unshift('Take Bath')

for(index = 0; index < myTodos.length; index++) {
    console.log(`Your task number ${index+1} is: ${myTodos[index]}`)
}