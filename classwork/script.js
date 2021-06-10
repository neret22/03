/* const users = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
]; */

/* ///one option
const createUser = (number) => {
    const usersNew = [];
    for (let i = 1; i <= number; i++){
        let oneUser = {
            id: Date.now() +10*i,
            name: `User_${i}`,
        }
        usersNew.push(oneUser);
    }
    return usersNew;
}
console.log(createUser(10));
 */

/* 
///second option
const getUsers = (num) => {
    const users = new Array(num);
    users.fill('');
    users.forEach((user, index) => {
       users[index] = createUser(index+1);
    })
    return users;
}
const createUser = (idx) => {
    return {
        id: Date.now() +10*idx,
        name: `User_${idx}`,
    }
}
console.log(getUsers(10)); */

 
///third option
function User(id, name) {
    this.id = Date.now() + id * 10;
    this.name = name;
}

function Post(id, userId, text) {
    this.id = id;
    this.userId = userId;
    this.text = text;
}

const getUsers = (num) => {
    const users = [];
    for (let i = 1; i <= num; i++){
        users.push(createUser(i));
    }
    return users;
}

const createUser = (idx) => {
    return new User (idx, `User ${idx}` )
}

const getPosts = () => {
    const posts = [];
    users.forEach ( (user) => {
        let numPosts = Math.floor(Math.random() * 25)
        for (let i = 1; i< numPosts; i++){
            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )
        }
    } )
    return posts
}


const renderUsers = () =>{
    const lBlock = document.querySelector('#l')
    lBlock.innerHTML = ''
    users.forEach(user => {
        const card = document.createElement('div')
        card.id = `user_${user.id}`
        card.innerText = user.name
        card.addEventListener('click', onUserClickHandle)
        lBlock.appendChild(card)
    } )
}

const onUserClickHandle = event => {
    console.log(event.target)
    let userId = +event.target.id.split('_')[1]
    const filteredPost = posts.filter( post => post.userId === userId)
    if (!filteredPost.length){
        return false;
    }
    renderPosts(filteredPost)
}

const renderPosts = (fPosts) =>{
    const rBlock = document.querySelector('#r')
    rBlock.innerHTML = ''
    fPosts.forEach(post => {
        const postCard = document.createElement('div')
        postCard.id = `user_${post.id}`
        postCard.innerText = post.text
        rBlock.appendChild(postCard)
    } )
}


const users = getUsers(5);
const posts = getPosts(4);


posts.sort((a,b) => a.id-b.id)

renderUsers();



////add comments to a posts 


