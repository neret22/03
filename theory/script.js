/* document.addEventListener('DOMContentLoaded', () =>{
    function makeRed() {
        document.querySelector('h5').style.color = 'red';
    }
    const btn = document.querySelector('#btn');
    //console.log(btn);
    //btn.onclick = makeRed;
    btn.addEventListener('click', makeRed);
})

click - press button
submit - to send some form отправка формы(только формы)
mouseover/mouseout - hover
keydown и keyup - нажатие и отпускание клавиши
DOMContentLoaded - 

mousedown/mouseup - нажатие левой кнопки мыши

*/
/* const h5 = document.querySelector('h5');
 function makeRed() {
    h5.style.color = 'red';
}
const btn = document.querySelector('#btn');
//console.log(btn);
//btn.onclick = makeRed;
btn.addEventListener('click', makeRed); */

const helloWorldCollection = document.querySelectorAll('h5');
function abracadabra(event) {
    console.log(event.target.innerText);
    console.log(event.currentTarget.id)
}

/* for (element of helloWorldCollection) {
    /* element.addEventListener('click', (event) => {testH5(event)});  ///first way
    element.addEventListener('click', abracadabra);
} */

const d = document.querySelector('div');
/*console.log(d.childNodes); 

d.childNodes.forEach( e => console.log(e));
 */

d.addEventListener('click', abracadabra);
