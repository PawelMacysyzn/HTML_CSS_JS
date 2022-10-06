const circles = document.querySelectorAll('.circle');



const btn_0 = document.getElementById('btn_0');

// Toggle button text on click
btn_0.addEventListener('click', function handleClick() {
  const initialText_btn_0 = 'PRESS';

  if (btn_0.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn_0.textContent = 'PRESSED';
  } else {
    btn_0.textContent = initialText_btn_0;
  }
});

const btn_1 = document.getElementById('btn_1');

// Toggle button text on click
btn_1.addEventListener('click', function handleClick() {
  const initialText_btn_1 = 'TURN_ON';

  if (btn_1.textContent.toLowerCase().includes(initialText_btn_1.toLowerCase())) {
    btn_1.textContent = 'TURN_OFF';
  } else {
    btn_1.textContent = initialText_btn_1;
  }
});









let activeLight = 0;
let timeSwith = 5000;

let isRunning=false;

function doSwitch() {
  
  isRunning = true;
  
  setInterval(() => {
    changeLight();
  }, timeSwith);
}

function changeLight() {
  
  if (!isRunning) {
    return;
  }
  
  circles[activeLight].className = 'circle';
  activeLight++;
  
  if(activeLight > 1){
    activeLight = 0;
  }
  
  const currentLight = circles[activeLight];
  
  currentLight.classList.add(currentLight.getAttribute('color'));
}


function turnOff() {
   
  circles[0].className = 'circle';
  
  circles[1].className = 'circle';
  
  isRunning = false;
  
}