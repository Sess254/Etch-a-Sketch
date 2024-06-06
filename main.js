let color = "black"

const black = document.getElementById('black')
const erasor = document.getElementById('erasor')
const random = documnt.getElementById('random')


black.addEventListener('click', () =>{
    changeColor('black')
})


erasor.addEventListener('click', () =>{
    changeColor('white')
})

random.addEventListener('click', () =>{
    changeColor('random')
})





function populateBoard(size) {
const board = document.querySelector(".board")
let squares = board.querySelectorAll("div")
squares.forEach((div) => div.remove())
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
board.style.gridTemplateRows =  `repeat(${size} , 1fr)`

let amount = size * size
for (let i = 0; i < amount; i++){
    const square = document.createElement('div')
    square.addEventListener('mouseover', colorSquares)
    square.style.backgroundColor = "white"
    board.insertAdjacentElement("beforeend", square)
}

}

function changeSize(input){
    if(input >= 2 && input <= 100){
        populateBoard(input)
    }else {
        alert("Enter a number between 2 and 100")
    }
}

function colorSquares() {
    if ((color === 'random')){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color
    }
   
}

function changeColor(choice) {
    color = choice

}



