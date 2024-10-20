const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let game = new Hangman('cat', 2)
game = new Hangman('hello world', 5)
puzzleEl.textContent = game.puzzle
guessesEl.textContent = game.statusMesssage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)

    game.makeGuess(guess)
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMesssage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(err)
})

// getPuzzle((error, puzzle)=> {
//     if(error){
//         console.log(`Error: ${error}`)
//     }else{
//         console.log(puzzle)
//     }
// })



