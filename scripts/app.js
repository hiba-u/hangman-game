const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)

    game1.makeGuess(guess)
    render()
})

const render = () => {
    // puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMesssage
    puzzleEl.innerHTML = ''

    game1.puzzle.split('').forEach((letter) => {
        let span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    })
    
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()




