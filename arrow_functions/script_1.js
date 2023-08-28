// --------------------------------------------------------------------
function sum(a, b) {
    return a + b
}

// OR //

let sum_arrow = (a, b) => a + b

// --------------------------------------------------------------------

function isPositive(number) {
    return number >= 0
}

// OR //

// let isPositive_arrow = (number) => number >= 0
let isPositive_arrow = number => number >= 0

// --------------------------------------------------------------------

function randomNumber() {
    return Math.random()
}

// OR //

let randomNumber_arrow = () => Math.random()

// --------------------------------------------------------------------

document.addEventListener('click', function () {
    console.log('Click')
})

// OR //

document.addEventListener('click', () => console.log('Click_arrow'))

// --------------------------------------------------------------------

