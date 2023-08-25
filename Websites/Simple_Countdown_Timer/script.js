// alert('is made by Pawel Macyszyn')


const sec = 10 // ms
const startingMinutes = 10
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown')


setInterval(updateCountdown, sec) // sec = ms 


function updateCountdown() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60


    minutes = minutes < 10 ? '0' + minutes: minutes

    seconds = seconds < 10 ? '0' + seconds: seconds

    countdownEl.innerHTML = `${minutes}: ${seconds}`
    time--

}
