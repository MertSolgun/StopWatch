const stopWatch = document.getElementById("stopWatch");
const play = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const reset = document.getElementById("reset");
const startAu = document.getElementById("startAudio");
const StopAu = document.getElementById("stopAudio");
const resetAu = document.getElementById("resetAu");
const dates = document.querySelector(".date");
const time = document.querySelector(".dateclock");
let [second, minutes, hours, msecond] = [0, 0, 0, 0];

let stpwtch;
let Stp = true;

function stopWatchUpdate() {
  msecond += 10;
  if (msecond >= 100) {
    msecond = 0;
    second++;
  }
  if (second >= 60) {
    second = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  stopWatch.innerText = `${hours < 10 ? "0" + hours : hours}: ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${second < 10 ? "0" + second : second} : ${
    msecond < 10 ? "0" + msecond : msecond
  }`;
}
play.addEventListener("click", () => {
  if (Stp) {
    stpwtch = setInterval(stopWatchUpdate, 100); // 100 milisaniyede calissin
    Stp = false;
    startAu.play();
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(stpwtch);
  Stp = true;
  stopAudio.play();
});

reset.addEventListener("click", () => {
  resetAu.play();
  clearInterval(stpwtch);
  [second, minutes, hours, msecond] = [0, 0, 0, 0];
  Stp = true;
  stopWatch.innerText = "00.00.00.00";
});

function updateClock() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString().slice(-2);
  const hours = currentDate.getHours().toString().slice(-2);
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  dates.textContent = `${day}.${month}.${year}`;
  time.textContent = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  } `;
}
updateClock();
setInterval(updateClock, 1000);
