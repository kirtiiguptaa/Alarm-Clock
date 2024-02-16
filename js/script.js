// Step 1 - Define Variables, relates to alarm sound
const display = document.getElementById("clock");
const audio = new Audio("files/javascript_assets_mixkit-alarm-tone-996.wav");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

// Step 2 - Activate/Display the clock
 function updateTime() {
  const date = new Date();

  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  document.getElementById("clock").innerText = hours + " : " + minutes + " : " + seconds;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}
setInterval(updateTime, 1000);

// Step 3 - Set the Alarm
// Get the alarm time from input box
function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(function() {
        audio.play();
      }, timeout);
      alert("Alarm set");
    }
  }
}

// Step 4 - Clear the Alarm
function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }
}
