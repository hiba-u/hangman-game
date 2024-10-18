const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split(''),
    this.remainingGuesses = remainingGuesses,
    this.guessedLetters = []
}

// Make a guess
Hangman.prototype.makeGuess = function(letter){

    letter = letter.toLowerCase()
    if(!this.guessedLetters.includes(letter)){
        this.guessedLetters.push(letter)

        if(!this.word.includes(letter)){
            this.remainingGuesses -= 1
        }
    }
}

// Get the puzzle
Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((letter)=> {
        if(this.guessedLetters.includes(letter) || (letter === ' ')){
            puzzle += letter
        }
        else{
            puzzle += '*'
        }
    })

    return puzzle
}