// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error('An error occured!')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('An error occured! Unable to get puzzle')
    }
}

