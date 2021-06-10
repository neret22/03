/* method 1 */

/* const main = document.getElementById('main');
console.log(main);
main.style.fontSize = '18px';
 */
/* method 2 */

/* console.log(paragraphs); */

/* for (element of paragraphs){
    console.log(element); 
}*/
/* method 3 */
/* console.log(document.getElementsByClassName('red'));
console.log(document.getElementsByName('fName'));
 */


const main = document.querySelector('#main');
console.log(main);

const ps = document.querySelectorAll('p');
console.log(ps);
console.log(document.querySelector('p'));
console.log(document.querySelector('.red'));
const red = document.querySelector('.red');
console.log(document.querySelector('[name = "fName"]'));

for (para of ps) {
    para.style.fontSize = '21px';
}

red.style.color = 'red';

document.querySelector('h1').classList.add('green');

document.querySelector('.js-hide').classList.remove('hide');

const secondli = document.querySelector('li:nth-child(2)');
console.log(secondli);

const list = document.querySelector('ul');
console.log(list.children[1]);

console.log( list )
const newLi = document.createElement('li');
newLi.innerText = 'Text 6';
newLi.classList.add('red-color');
list.appendChild(newLi);

const newLiTmp = '<li class="green">Text 7</li>';
list.innerHTML += newLiTmp;

const app = document.querySelector('#app');
const person = {
    fName: 'Ivan',
    lName: 'Ivanov', 
    age: 34
}
/* const tmpl = `<div><h3>${person.fName} ${person.lName}</h3> <p> ${person.age}</p></div>`;
app.innerHTML += tmpl; */

const persons = [
    person,
    {fName: 'Igor', lName: 'Petroff', age: 26},
    {fName: 'Marya', lName: 'Sidorova', age: 24},
    {fName: 'Darya', lName: 'Smith', age: 17}
];

persons.forEach( person => {
    const tmpl = `<div><h3>${person.fName} ${person.lName}</h3> <p> ${person.age}</p></div>`;
    app.innerHTML += tmpl;
});


/* read again and understand, all functions repeat from previous lesson, selectors */