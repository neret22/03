const persons = [
    {id: Date.now()+10, nickname: '007', name: 'James Bond'},
    {id: Date.now()+20, nickname: 'IronName', name: 'Tony Stark'},
    {id: Date.now()+30, nickname: 'BlackWidow', name: 'Natasha Romanoff'},
    {id: Date.now()+40, nickname: 'Pyatachok', name: 'Mini Pig'},
]

///1. draw button  id = "id_datenow", text = nickname
/// <button type = "button" id = "Nickname">Nickname<button>
//type of buttons: 
//1)buttons
//2)submit
//3)clear
/* function name(args) {} */

const createButton = (prs) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = `id_${prs.id}`;
    btn.innerText = prs.nickname;
    return btn;
};

const saysHello = (event) => {
    event.preventDefault();
    let id = +event.target.id.split('_')[1];
    const idx = persons.findIndex(person => person.id === id);
    if (idx === -1){
        return false;
    }
    document.querySelector('#greeting').innerHTML = `
            <div><p>Hello from person ${persons[idx].name}<p></div>
      `;
};
const btns = document.querySelector('#btns');
persons.forEach(person => {
    btns.appendChild(createButton(person));
});

///2. Name says 'Hello!'



btns.addEventListener('click', saysHello);