let color = ""
let click = true

const black = document.getElementById('black')
const erasor = document.getElementById('erasor')
const random = document.getElementById('random')
const reset = document.getElementById('reset')


black.addEventListener('click', () =>{
    changeColor('black')
})


erasor.addEventListener('click', () =>{
    changeColor('white')
})

random.addEventListener('click', () =>{
    changeColor('random')
})

reset.addEventListener('click', resetBoard)



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
    if (click){
        if (color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color
        }

    }

   
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    const board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', (e) =>{
    if (e.target.tagName != 'BUTTON'){
        click = !click
        if (click){
            document.querySelector('.mode').textContent = `Mode: coloring`
        } else{
            document.querySelector('.mode').textContent = 'Mode: Not coloring'
        }
    }

})


