const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

    let innerSeconds = seconds;
    
    function parseTime(innerSeconds) {
      let date = new Date(0);
      date.setSeconds(innerSeconds);
      let timeString = date.toISOString().substring(11, 19);
      return timeString;
    }

    function displayTime(innerSeconds) {
      timerEl.innerHTML = parseTime(innerSeconds);
    }

    displayTime(innerSeconds);

    let timer = setInterval(() => {
      if (innerSeconds == 1) {
        clearInterval(timer);
      }
      innerSeconds--;
      displayTime(innerSeconds);
    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {

  // Очистите input так, чтобы в значении
  // оставались только числа
  
  let numMatch = inputEl.value.match(/\d+/g);

  if (numMatch) {
    inputEl.value = numMatch[0];
  } else {
    inputEl.value = null;
  }

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});