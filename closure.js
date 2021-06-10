/* function main (){

    /////
    draw();
    ////
    console.log('I am finished')
}
function draw(){
    //////
    calc();
    ///
    return "Drawing"
}

function calc(){
    //////
    return 1+1;
}

main() */
/* 
stack overflow!

stack 
LIFO - last in first out */

////closure замыкание функции

function counter() {
    let count = 0;
    return function(){
        return count++; 
    }
}

let c1 = counter();
let с2 = counter();

console.log(c1());
console.log(c1());
console.log(c1());
console.log(c2());










