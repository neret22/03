/// rest  - остаточный параметр
/// spread - рвзворачивает объект в массив
/// destrucrization - распаковка массива или объекта по переменным
/* 
function sum(...rest) {
   return rest.reduce((sum, e) => sum + e, 0)
}
    
console.log(sum(1,2,3,4,5,6,7))
console.log(sum(10,20,30,4,5,6,7, 100, 200))
 */
/* 
rest
const nummers = [1,2,3,4,5,6,7,8,9,0];

let [a,b,c, ...rest] = nummers;
console.log(a)
console.log(b)
console.log(c)
console.log(rest)
 */
//// rest or abra or whatever I like

/* spread 

let [fName, lName,  ...rest] = 'Ulii Zesar Imperator of Rome'.split(' ')

console.log(fName)
console.log(lName)
console.log(spread)
*/
/* 
const nummers = [1,2,3,4,5];
const nummers2 = [6,7,8,9,0];

/// const cN = nummers we gave a link to the same cell of memory
/// spread 
const copyNummers = [...nummers] //// we have really copied massive and gave a new link
console.log(copyNummers)

const allNummers = [...nummers, ...nummers2] 
console.log(allNummers)
 */
 
 const person = {
    fName: 'Ivan',
    age: 30, 
    profession: 'Developer'
}
/*
const cP = person;
//console.log(cP === person);
const copyPerson = {...person}
//console.log(copyPerson === person)
person.age = 31;
//console.log(copyPerson)

const car = {
    id: 123,
    model: 'Bumer'
}
const copyPerson2 = {...person, ...car}
console.log(copyPerson2)

///destructurization
const {fName: imya, id: passport} = copyPerson2;
console.log(imya, passport);
console.log(imya, passport);

  */
/* 
/// эквивалентность объектов в Javascript

function Car(id, model) {
    this.id = id;
    this.model = model;
    this.equals = function (obj) {
        return this.id === obj.id && this.model.length > 3 && obj.model.length > 3
    }
}

let c1 = new Car (123, 'Volvo')
let c2 = new Car (123, 'BMW')

console.log(c1 .equals(c2));

 */
/* 
const greeting = (person) => {
    document.querySelector('h1 > span').textContent = person.fName 
}
*/
const greeting = ({fName, age}) => {
    document.querySelector('h1 > span').textContent = fName 
    document.querySelector('p > span').textContent = age
}
greeting(person)