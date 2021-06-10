const block = document.querySelector(".timout-color");

const changeColorAction = () => {
    block.classList.toggle("blue");
    block.classList.toggle("red");
}

const changeColor = () =>  {
    const block = document.querySelector(".timout-color")
    setTimeout(() => {
        changeColorAction();
    }, 2000);
};

const loopColor = () => {
    let nLoop = 0
    let loopColorId = setInterval(() => {
        document.querySelector('#countLoop').innerText = nLoop
        changeColorAction()
        nLoop++
        if (nLoop > 20){
            clearInterval(loopColorId)
            document.querySelector('#countLoop').innerText = "Loop is ended"
        }
    }, 1000)
}
document.querySelector("#changeColor").addEventListener("click", changeColor)

document.querySelector("#loopColor").addEventListener("click", loopColor)

