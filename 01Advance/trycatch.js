const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 70
    } else {
        throw Error('Ammont needs to be in number')
    }
}

try {
    const myValue = convertToRs('5')
    console.log(myValue)

} catch (error) {
    console.log(error);
}

console.log('I will not run if program crashes')

// the above line will not be executed if no try catch is used
