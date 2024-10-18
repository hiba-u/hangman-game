const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)

    game.makeGuess(guess)
    puzzleEl.textContent = game.getPuzzle()
    guessesEl.textContent = game.remainingGuesses
    console.log(game.status)

})

const game = new Hangman('cat', 2)
console.log(game.status)
puzzleEl.textContent = game.getPuzzle()
guessesEl.textContent = game.remainingGuesses

