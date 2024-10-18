const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split(''),
    this.remainingGuesses = remainingGuesses,
    this.guessedLetters = []
    this.status - 'playing'
}

// Recalculate the status of the game
Hangman.prototype.calculateStatus = function(){
    let finished = true
    this.word.forEach((letter) => {
        if(!this.guessedLetters.includes(letter)){
            finished = false
        }
    })

    if(this.remainingGuesses === 0){
        this.status = 'failed'
    }else if(finished){
        this.status = 'finished'
    }else{
        this.status = 'playing'
    }
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

    this.calculateStatus()
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