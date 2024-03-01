let T;
let isRunning = false;
let startT;
let lapCounter = 1;

function startStopwatch() {
    if (!isRunning) {
        startT = new Date().getTime();
        T = setInterval(updateTime, 1000);
        document.getElementById('startBtn').innerHTML = 'Stop';
        document.getElementById('lapBtn').disabled = false;
    } else {
        clearInterval(T);
        document.getElementById('startBtn').innerHTML = 'Start';
        document.getElementById('lapBtn').disabled = true;
    }
    isRunning = !isRunning;
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startT;
    const formattedTime = formatTime(elapsedTime);
    document.querySelector('.time-display').textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function recordLap() {
    const lapTime = document.querySelector('.time-display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
}

function resetStopwatch() {
    clearInterval(T);
    isRunning = false;
    document.getElementById('startBtn').innerHTML = 'Start';
    document.getElementById('lapBtn').disabled = true;
    document.querySelector('.time-display').textContent = '00:00:00';
    document.getElementById('lapList').innerHTML = '';
    lapCounter = 1;
}
