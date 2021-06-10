
    /////array methods/////
const person = [
    {id: 1, name: "Person 1", salary: 1000},
    {id: 1, name: "Person 2", salary: 1200},
    {id: 1, name: "Person 3", salary: 2050},
    {id: 1, name: "Person 4", salary: 750},
    {id: 1, name: "Person 5", salary: 1400},
] 

let total = person.reduce((sum, person) => {return sum +=person.salary}, 0 );
console.log(total);
let avg = total / person.length;
console.log(avg);

let onePerson = person[0];
const onePersonArray = Object.entries(onePerson);
console.log(onePersonArray);



const fruits = ['banana', 'apple', 'orange', 'banana', 'banana', 'orange', 'grape', 'apple', 'orange', 'banana']; /// sort by keys and then by frequency

const fruitsObj = fruits.reduce((fr, fruit) => {
    fr[fruit] = (fr[fruit] || 0) + 1 ;
    return fr;;
}, {})
console.log(fruitsObj);

const _arr = Object.keys(fruitsObj);
console.log(_arr)

const result = _arr.sort((a, b) => fruitsObj[b] - fruitsObj[a]);
console.log(result);

///map, forEach, filter, findIndex
[].map((element, index, array) => {})