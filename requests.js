// const getPuzzle = (wordCount) => {
//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if(e.target.readyState === 4 && e.target.status === 200){
//                 const data = JSON.parse(e.target.responseText)
//                 resolve(data.puzzle)
//             }else if(e.target.readyState === 4){
//                 reject('An error occured')
//             }
//         })

//         request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
//         request.send()
//     })
// }

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.data === 200){
            return response.json()
        }else{
            throw new Error('An error occured!')
        }
    }).then((data) => {
        return data.puzzle
    })
}

