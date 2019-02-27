console.log('5' - 5);//here you got 0 as js is smart
console.log('5' + 5);//here also it is supposed to get 10 but the output is 55
// this is exactly coercion
//you should never expect js to be smart
const giveType = typeof 5

console.log(giveType);

const adder = true + 5
console.log(adder)
//here true is considered as 1 and false as 0

const loginDetails = []
//logic for getting details from DB

const loginID = loginDetails[0]

if (loginID) {
    console.log('Allow user to login')
} else {
    console.log('Auth failed');
}

//value that interpret as false : 
// false
// 0
// '' only empty strings are considered as false not empty array or anything more
// null
// undefined