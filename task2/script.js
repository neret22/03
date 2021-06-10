////polyndrom////

let string = 'privet';

function polydrom(str){
    let finalString = '';
    for (let i = str.length - 1; i >= 0; i-- ){
        finalString += str[i];
    }
    return finalString;
}

//console.log(polydrom(string));

console.log(string.split('').reverse().join(''));