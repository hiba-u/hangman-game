class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split(''),
        this.remainingGuesses = remainingGuesses,
        this.guessedLetters = [],
        this.status = 'playing'
    }

    // Recalculate the status of the game
    calculateStatus (){
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
    makeGuess(letter){

        letter = letter.toLowerCase()
    
        if(this.status !== 'playing'){
            return
        }
    
        if(!this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter)
    
            if(!this.word.includes(letter)){
                this.remainingGuesses -= 1
            }
        }
    
        this.calculateStatus()
    }

    // Get the puzzle
    get puzzle(){
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

    // Get the status message
    get statusMesssage(){
        if(this.status === 'playing'){
            return `Guesses left ${this.remainingGuesses}`
        }else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        }else{
            return 'Great work! You guessed the word.'
        }
    }
}