/* function f1(){
    console.log('Hello World')
}

function f2(callback){
    callback()
}

const f3 = () => {console.log('Hello, from f3')}
f2(f1)

f2( function() {
    console.log('Hello World');
})

f2(f3)

f2( () => {console.log('Hello from anonymus')}) */

const person = {
    name: 'Ivan',
    age: 29, 
    profession: 'Web developer'
}

let str = 'JSON -JavaScrip Object Notation'

let personJSON = JSON.stringify(person)/// transform all in string
console.log(personJSON)

let personObject = JSON.parse(personJSON) /// transform string to object
console.log(personObject);
console.log(personObject.name);

const persons = [person, {name : 'Manya', age: 28, profession: 'Doctor'}]

console.log(JSON.stringify(persons))


