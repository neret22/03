///////////////Odd numbers/////


let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdd(array){
    let odd = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            odd.push(array[i]);
        }
    }
    return odd;
}
console.log(getOdd(array1));