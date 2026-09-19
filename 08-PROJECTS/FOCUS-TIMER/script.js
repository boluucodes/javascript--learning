// Get references to the DOM elements

const timer = document.getElementById('timer');
const durationInput = document.getElementById('durationInput');
const setBtn = document.getElementById('setBtn');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

//remaining time
 let remainingTime = 0;

//set timer duration
setBtn.addEventListener('click', () => {   

    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    remainingTime = duration * 60;

    timer.textContent = `${duration.toString().padStart(2, '0')}:00`;

    
 } )
 


 //State = information your program needs to remember while it is running.
