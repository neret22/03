/* 

///promises
const getData = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if ( 1===2 ){
            resolve([1,2,3,4,5])
        } else {
        reject(new Error('OOOOpss'))
        }
    }, 2000)
} )


getData
    .then( (response ) => {console.log(response)} )
    .catch( (e) => {console.log(e.message);} )

console.log('finish')
 */

///fetch function

fetch ('https://jsonplaceholder.typicode.com/users')
.then( (response) => {return response.json()})
.then( (users) => {renderUsers(users)} )
.catch( (e) => console.log(e.message) )



const renderUsers = (users) => {
    users.forEach( user => {
        const li = `<li> ${user.username} -> ${user.phone}</li>`
        document.querySelector('#users').innerHTML += li

    })
}



