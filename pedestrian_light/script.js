/*
Wszystkie stany (4)
(1) po uruchomieniu stan zielony_off and czerwony_off
(2) po wciśnięciu przycisku turn_ON_Off zielony_off and czerwony_on
(3) po wciśnięciu press zielony_on and czerwony_off, po 5s stan (2)

*/


// const circles = document.querySelectorAll('.circle');

var Logic_Is_Enable = false;

// if it is true, it means that it is waiting for the operation jumps
var but_changeLightOnClick = false;

var activeLight = 0;

const time_for_green = 3000

function changeLight() {
  
  if (Logic_Is_Enable) {
    activeLight++;
    // To delete
    console.log(activeLight)

    if(activeLight > 1){
      activeLight = 0;
    }
    TURN_Red_Lught();
    TURN_Green_Lught();
  }
}

// To change color to red
function changeLightOnClick(){

  if (Logic_Is_Enable && activeLight == 0) {

    // but_changeLightOnClick = true;

    setTimeout(changeLight, 0)
    setTimeout(changeLight, time_for_green)

  }
}



// ------------------- GREEN -----------------------------
function TURN_ON_Green_Light() {
  var Light = document.getElementById('color_green'); 
  Light.style.backgroundColor = "#2ecc71";
  Light.style.boxShadow = "0 0 20px 5px #2ecc71";
  }

function TURN_OFF_Green_Light() {
  var Light = document.getElementById('color_green'); 
  Light.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  Light.style.boxShadow = "";
  }

// ------------------- RED -----------------------------

function TURN_ON_Red_Light() {
  var Light = document.getElementById('color_red'); 
  Light.style.backgroundColor = "#c0392b";
  Light.style.boxShadow = "0 0 20px 5px #c0392b";
  }

function TURN_OFF_Red_Light() {
  var Light = document.getElementById('color_red'); 
  Light.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  Light.style.boxShadow = "";
  }

// -----------------------------------------------------

function TURN_Green_Lught() {
  var Light = document.getElementById('color_green');

  if (Light.style.backgroundColor == 'rgba(0, 0, 0, 0.3)') {
    TURN_ON_Green_Light();
  }
  else {
    TURN_OFF_Green_Light();
  }
}

function TURN_Red_Lught() {
  var Light = document.getElementById('color_red');

  if (Light.style.backgroundColor == 'rgba(0, 0, 0, 0.3)') {
    TURN_ON_Red_Light();
  }
  else {
    TURN_OFF_Red_Light();
  }
}

function turn_on_off() {
   
  if (Logic_Is_Enable == false) {
    TURN_OFF_Green_Light();
    TURN_ON_Red_Light();
    Logic_Is_Enable = true;
  } 
  else {
    TURN_OFF_Green_Light();
    TURN_OFF_Red_Light();
    Logic_Is_Enable = false;
    activeLight = 0;
    // To delete
    console.log(activeLight)

  }
}



const btn_1 = document.getElementById('btn_1');
// Toggle button text on click
btn_1.addEventListener('click', function handleClick() {
  const initialText_btn_1 = 'TURN_ON';

  if (btn_1.textContent.toLowerCase().includes(initialText_btn_1.toLowerCase())) {
    btn_1.textContent = 'TURN_OFF';
    btn_1.style.backgroundColor = '#4CAF50';
  } else {
    btn_1.textContent = initialText_btn_1;
    btn_1.style.backgroundColor = '#df2b13';
  }
});







