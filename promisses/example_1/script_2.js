const userLeft = false
const userWatchingCatMeme = false

// function wtchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// wtchTutorialCallback((message) => {
//     console.log('Succes: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })

function wtchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

wtchTutorialPromise().then((message) => {
    console.log('Succes: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})