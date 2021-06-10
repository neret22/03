

const todoList = JSON.parse(localStorage.getItem('todoList'));

function ToDo(title) {
    this.id = Date.now();
    this.title = title;
    this.isDone = false;

}

const submitFormHandle = event => {
    event.preventDefault();
    const field = document.querySelector('#newToDoField');
    todoList.push(new ToDo(field.value));
    /*  console.log(todoList); */
    field.value = '';
    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList))
}
const renderTodoList = () => {
    const ul = document.querySelector('#todoList');
    ul.innerHTML = '';
    todoList.forEach(item => {
        /* console.log(item); */
        const li = document.createElement('li');
        li.innerText = item.title;
        li.id = 'li_' + item.id;
        if (item.isDone) {
            li.classList.add('done');
        }
        li.addEventListener('click', liClickHandle)
        ul.appendChild(li);

    });

};
const liClickHandle = event => {
    let id = +event.target.id.split('_')[1];
    const index = todoList.findIndex(todo => todo.id === id);
    if (index === -1) {
        return false;
    }
    /*  todoList[index].isDone = true; */
    todoList[index].isDone = !todoList[index].isDone;
    renderTodoList();
    localStorage.setItem('todoList', JSOn.stringify(todoList))
}
localStorage.setItem('header', 'Super Application for my first Test')
let header = localStorage.getItem('testOne')
document.querySelector('h3').innerText = header
document
    .querySelector('#todoForm')
    .addEventListener('submit', submitFormHandle)

renderTodoList();

