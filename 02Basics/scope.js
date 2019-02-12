let iAmGlobal = 'someValue'

if (true) {
    let iAmLocal = 'someMoreValue'
    var iAmVar = 'someMoreMoreValue'
    console.log(iAmGlobal)
    iAmGlobal = 'superman'
    console.log(iAmLocal)
    
}

// console.log(iAmLocal)
console.log(iAmVar)
console.log(iAmGlobal)
