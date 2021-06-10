const array = [3,6,2,7,3,16,4,8];
// array.indexOf(3);
// array.lastIndexOf(3);
// array.concat([1,2,3], [5,6,7]);
//
// function a() {
//
// }
//
// const b = function (){}
//
// const c = (a,b,c) => {
//     let d = a+b*c;
//     return d;
// }
//
// const d = a => {
//     // ...
// }
//
// const e = a => a*2 // (a) => {return a*2}

// console.log(array.sort( (a,b) => b-a ));

const users = [
    {name: 'Ivanka', age: 23, money:1000},
    {name: 'Ivan', age:25, money:750},
    {name: 'John', age:24, money:1350},
    {name: 'Adams', age:33, money:50}
];
//
// // console.log( users.sort( (a,b) => a.age - b.age ));
// console.log( users.sort((a,b)=>
//     a.name.localeCompare(b.name)
//  ))
// console.log( [1,'a',3,'d'].sort() );
//

const fruits = ['orange', 'apple', 'banana', 'cherry', 'mango', 'limon', 'lime'];

// fruits.fill('none', 4)
// console.log( fruits )
// let idx = fruits.indexOf('none')
// if (idx !== -1) {
//     fruits[idx] = 'lime'
// }
// console.log( fruits )
// fruits.forEach( (ele, idx) => {
//     if ( ele === 'none' ) fruits[idx] = 'kiwi'
// } )
//
// console.log( fruits )

//
// fruits.splice(1,2,'pumpkin', 'cocos');
// console.log( fruits )
// console.log(fruits.slice(3));
// console.log( fruits )
//
//
// fruits.forEach( ele => { console.log(ele) });
// fruits.map(ele=>{ return ele.toUpperCase() });
// console.log( fruits.map(ele=>{ return ele.toUpperCase() }) );
// console.log( fruits )

// console.log(users.map( user => user.age += 1 ));
// console.log( users )

// const filtered = array.filter(ele=> ele % 2 === 0 );
// console.log( filtered )

// console.log( users.filter( u => u.age > 50 ) )
// -------
// array.findIndex(()=>{});

// let idx = users.findIndex( usr => usr.age === 23 )
// if ( idx !== -1 ) {
//     console.log( users[idx] )
// }
// console.log( idx )

// const arr = new Array(100);
// arr.fill('cat', 50, 75)
// // arr.fill('cat')
// console.table( arr )

// array.reduce(()=>{})
// let result = users.reduce( (sum, user) => { return sum += user.money }, 0 )
// console.log( result )
// console.log( result / users.length )
// console.log( users.length )

// function sayHello() {
//     return 'Hello ';
// }
//
// function sayBye() {
//     return 'Bye ';
// }
//
// function greeting( fn ) {
//     console.log(fn() + 'Ivan')
// }
//
// greeting( sayHello )
// greeting( sayBye )

// let str = 'Привет участникам соревнований'
// console.log( str.split(' ').join('_') )
// console.log( str.split(' ').join('').split('').join(':-)'))

// <button id="user_10">User 10</button>
const person = {id:10, name: 'Ivan'}

// const name = 'Ivan';
//
// console.log( `Hello ${name}` )
// console.log( 'Hello ' + name )


// ------------------------------------------

// console.log( Object.keys(person) )
// console.log( Object.values(person) )

