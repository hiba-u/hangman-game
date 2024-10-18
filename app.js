const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game = new Hangman('cat', 2)
puzzleEl.textContent = game.puzzle
guessesEl.textContent = game.statusMesssage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)

    game.makeGuess(guess)
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMesssage
})



