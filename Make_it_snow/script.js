
const refreshing = 100;

setInterval(createSnowFlake, refreshing);

function createSnowFlake() {

    const snow_Flake = document.createElement('i');
    longer_duration = 10;    // sec
    shorter_duration = 4;   // sec

    snow_Flake.classList.add('fas');
    snow_Flake.classList.add('fa-snowflake');
    snow_Flake.style.left = Math.random() * window.innerWidth + 'px';

    snow_Flake.style.animationDuration = Math.random() * (longer_duration - shorter_duration) + shorter_duration + 's' // between 3-8 sec
    snow_Flake.style.opacity = Math.random();
    snow_Flake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snow_Flake);

    setTimeout(() => {
        snow_Flake.remove();
    }, (longer_duration * 1000));

}