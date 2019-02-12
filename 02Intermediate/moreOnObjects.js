let myYoutubeVideoOne = {
    title: 'Loops in javascript', 
    videoLength: 15,
    videoCreator: 'Sumit Mishra',
    videoDescription: 'video description goes here'
}

let myYoutubeVideoTwo = {
    title: 'Functions in javascript', 
    videoLength: 15,
    videoCreator : 'Sumit Mishra',
    videoDescription: 'video description goes here'
}

let changeVideoLength = function(myObject) {
    return `Time of this video is ${myObject.videoLength}`
}

console.log(changeVideoLength(myYoutubeVideoOne))
console.log(changeVideoLength(myYoutubeVideoTwo))

let changeVideoLengthAgain = function(myObject) {
    return {
        formatOne: `Time of this video is ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is ${myObject.videoLength +1}`
    }
}
//above function is taking an object an dreturning an object
let adOne = changeVideoLengthAgain(myYoutubeVideoOne)
console.log(adOne)
console.log(adOne.formatOne)
console.log(adOne.formatTwo)