/*
All states (4)
(1) after starting the state green_off and red_off
(2) after pressing the turn_ON_Off button green_off and red_on
(3) after pressing press Green_on and Red_off for Time_for_Green, next is state (4)
(4) Green_off and Red_on (2), after time Time_for_Red, you can jump into (3)
(5) pressing the button turn_ON_Off, gives state (1)
*/

//=============== SETUP ===================

const Time_for_Green = 5; // sec
const Time_for_Red = 4; // sec

// ---------------var-----------------------

var Logic_Is_Enable = false;

//--------------- Timer -------------------
const countdownEl = document.getElementById('countdown');
const sec = 1000; // ms
const Timer_Pt = Time_for_Green + Time_for_Red;
var TimerId = null;
let Timer_ET = Timer_Pt;
let Timer_Enable = false;
let Timer_Q = false;



function updateCountdown() {  
  Timer_ET--;
  //--------------LOGIC FOR LIGHT------------------
  if (Logic_Is_Enable) {
    if ((Timer_ET >= (Timer_Pt - Time_for_Green))){
      // console.log('Green', Timer_ET, "sec");
      TURN_ON_Green_Light();
      TURN_OFF_Red_Light();
    } 
    else {
      // console.log('Red', Timer_ET, "sec");
      TURN_OFF_Green_Light();
      TURN_ON_Red_Light();
    }
  }
  //-----------------------------------------
  
  if (Timer_ET <= 0 || Logic_Is_Enable == false) {
    Timer_Q = true;
    Timer_Enable = false;
    clearInterval(TimerId);
    Timer_ET = Timer_Pt;
  }
}

//------------------------------------------

function changeLightOnClick(){
  if (Logic_Is_Enable) {
    if (Timer_Enable == false){
      TimerId = setInterval(updateCountdown, sec);
      Timer_Enable = true;
    }
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

// -------------------ADVANCED FEATURES TO COME------------------------

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
  }
}
// -------------------------------------------------------------------

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







