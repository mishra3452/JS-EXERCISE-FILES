// Kings problem

let king = 'John'

if (true) {
    let king = 'Sam'

    if (true) {
        //let king = 'Ram'
        console.log(king)
    }
}

if (true) {
    console.log("I am second part" + king);
}

// if we dont have a variable declared and we want to access it by aassigning then it is global
//for example : king = 'jon' (without let or var)