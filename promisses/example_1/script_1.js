let p = new Promise((resolve, reject) => {
    let a = 1 + 2

    if (a == 2) {
        resolve('Succes')
    } else {
        reject('Failed')
    }
})

p.then((mesage) => {
    console.log("This is in the then " + mesage)
}).catch((mesage) => {
    console.log('This is in the catch ' + mesage)
})