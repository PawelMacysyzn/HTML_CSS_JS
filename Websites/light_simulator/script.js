const circle =
document.querySelectorAll('.circle');

const lightRed  = 0
const lightYellow = 1
const lightGreen = 2

const timeForSwitch = 4 // sec

let activeLight = lightYellow;

setInterval(changeLight_switch, timeForSwitch * 1000);


function changeLight_switch() {
    if (activeLight > 2) {
        activeLight = 0;
    }
    console.log("Activ staus: ", activeLight)

    switch (activeLight++) {
        case lightRed:
            All_Off();
            red_On();
          break;
        case lightYellow:
            All_Off();
            yellow_On();
          break;
        case lightGreen:
            All_Off();
            green_On();
          break;
      }
    
}


// ---------------------------- Light ON -----------------------------------------
function red_On(){
    circle[lightRed].classList.add(circle[lightRed].getAttribute('color'));
}

function yellow_On(){
    circle[lightYellow].classList.add(circle[lightYellow].getAttribute('color'));
}

function green_On(){
    circle[lightGreen].classList.add(circle[lightGreen].getAttribute('color'));
}


function All_On(){
    red_On()
    green_On()
    yellow_On()
}

// ---------------------------- Light OFF ----------------------------------------

function red_Off(){
    circle[lightRed].className = 'circle';}

    
function yellow_Off(){
    circle[lightYellow].className = 'circle';}
        
function green_Off(){
        circle[lightGreen].className = 'circle';}

function All_Off(){
    red_Off()
    green_Off()
    yellow_Off()
}

// --------------------------------------------------------------------------------
