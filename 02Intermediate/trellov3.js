// let myTodos = {
//     day: 'Monday',
//     meetings: 0,
//     meetDone: 0,
    
//     addMeeting: function() {
//         console.log('Heyy, I am a function')
//     }
// }


// myTodos.addMeeting()

let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    
    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },
    meetDoneToday: function(num){
        this.meetDone = this.meetDone + num
    },

    summary: function() {
        return `you have ${this.meetings - this.meetDone} meetings left for today`
    },
    reset: function() {
        this.meetings = 0
        this.meetDone = 0
        console.log('Meetings reset')
    }
}
// let myTodosTwo = {
//     day: 'Tuesday',
//     meetings: 0,
//     meetDone: 0,
    
//     addMeeting: function() {
//         console.log(this)
//     }
// }


myTodos.addMeeting(5)
myTodos.meetDoneToday(2)
console.log(myTodos.summary())
myTodos.reset()
console.log(myTodos.summary())
// myTodosTwo.addMeeting()

//Assignment
// handle meeting done
//create a function that can reset entire day