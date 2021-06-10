const URL = 'https://jsonplaceholder.typicode.com'
let users = []
let todos = []

const main = () => {
    getUsers()
    // renderUsers()
}

const getUsers = () => {
    fetch(`${URL}/users`)
        .then(response => response.json())
        .then(usersArray => {
            users = usersArray
            renderUsers()
        })
}

const renderUsers = () => {
    const ul = document.querySelector('.users-list')
    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = user.username
        li.id = `id_${user.id}`
        li.addEventListener('click', userClickHandle)
        ul.appendChild(li)
    })
}


const userClickHandle = event => {
    event.preventDefault()
    let id = +event.target.id.split('_')[1]
    getPostById(id)
    renderUserName(id)
}

const getPostById = userId => {
    fetch(`${URL}/posts?userId=${userId}`)
        .then(response => response.json())
        .then(postsArray => {
                posts = postsArray
                renderPosts()
            })
}

const renderPosts = () => {
    const ol = document.querySelector('.posts-list')
    ol.innerHTML = ''
    posts.forEach(post => {
        const li = document.createElement('li')
        
        li.textContent = post.body
        ol.appendChild(li)
    })
}

const renderUserName = userId => {
    const idx = users.findIndex(u => u.id === userId)
    if (idx !== -1) {
        document.querySelector('#posts h2 span').textContent = users[idx].name
    }
}

main()