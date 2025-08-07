const h1Timer = document.querySelector('.h1-timer')
const h1Animation = document.querySelector('.h1-animation')
const mainDiv = document.querySelector('.main-div')

let hours = 1;
let minutes = 0;

let seconds = 30;

const timer = setInterval(() => {
  console.log(`${hours}:${minutes.toString().padStart(2, '0')}`);
  if (minutes === 30) {
    console.log("Залишилось менше половини часу!");
  }
  if (hours === 0 && minutes === 0) {
    clearInterval(timer);
    console.log("Таймер завершено!");
  } else {
    if (minutes === 0) {
      hours--;
      minutes = 59;
    } else {
      minutes--;
    }
  }
}, 1000);

function startTimer() {
    setInterval(() => {
        if (seconds === 10) {
           startAnimation();
        }
        if (seconds === 0) {
            clearInterval(this);
            h1Timer.textContent = "00:00";
            action();
            return;
        }
        seconds -= 1;
        const time = getTimeFromSeconds(seconds);
         h1Timer.textContent = `${time.minutes}:${time.secs}`
    }, 1000);
}

startTimer()

function startAnimation() {
  let rotate = 0;
      setInterval(() => {
        rotate += 10;
        h1Animation.style.transform = `rotate(${rotate}deg)`;
        h1Animation.style.display = 'flex';
    }, 100);  
}

function action() {
   mainDiv.style.background = "url(/IMGS/bg2.jpg)"
}

function getTimeFromSeconds(startSeconds) {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
  const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

  const totalSeconds = Math.floor(startSeconds);

  const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
  const remSeconds = totalSeconds % SECONDS_IN_DAY;

  const hours = pad(Math.floor(remSeconds / SECONDS_IN_HOUR));
  const minutes = pad(
    Math.floor((remSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
  );
  const secs = pad(remSeconds % SECONDS_IN_MINUTE);

  return { days, hours, minutes, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}