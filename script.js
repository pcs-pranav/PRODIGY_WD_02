let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

function startStop() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        startStopBtn.textContent = 'Stop';
    } else {
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
    startStopBtn.textContent = 'Start';
    lapsList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
        
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.appendChild(lapItem);
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}
