var john = {
    name: 'I am john',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users.size);//size of users

console.log(users.get('sam'));//this will get the result of sam key

console.log(users.keys());
console.log(users.values());



//for of 

for(const key of users.keys()) {
    console.log(key);
}

for(const value of users.values()) {
    console.log(value);
}

for(const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
}

users.forEach((value, key) => console.log(key + ' = ' + value.name))