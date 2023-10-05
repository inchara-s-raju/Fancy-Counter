let incrementCounter = document.querySelector('.counter_increment');
let decrementCounter = document.querySelector('.counter_decrement');
let resetButton = document.querySelector('.counter__reset-button');
let counterTitle = document.querySelector('.counter_title');
let counterValue = document.querySelector('.counter_value');
let counter = document.querySelector('.counter');

const increment = () => {
  //get current value of counter
  const currentValue = counterValue.textContent;
  //convert value to number type
  const currentValueNumber = +currentValue;
  //increment by 1
  let newValue = currentValueNumber + 1;
  //check if new value is greater than 5
  if (newValue > 5) {
    //if it is ,force it to be 5 instead
    newValue = 5;
    //give visual indicator that limit has been reached
    counter.classList.add('counter--limit');
    counterTitle.innerHTML = 'LIMIT! BUY <b> PRO </b> FOR > 5';
    //disable increase and decrease buttons
    incrementCounter.disabled = true;
    decrementCounter.disabled = true;
  }
  //set counter with new value
  counterValue.textContent = newValue;
  incrementCounter.blur();
};

const decrement = () => {
  const currentValue = counterValue.textContent;
  const currentValueNumber = +currentValue;
  let newValue = currentValueNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValue.textContent = newValue;
  decrementCounter.blur();
};

incrementCounter.addEventListener('click', increment);
decrementCounter.addEventListener('click', decrement);
document.addEventListener('keydown', increment);

resetButton.addEventListener('click', () => {
  counterValue.textContent = 0;
  counter.classList.remove('counter--limit');
  counterTitle.textContent = 'FANCY COUNTER';
  //enable increase and decrease buttons
  incrementCounter.disabled = false;
  decrementCounter.disabled = false;
  //unfocus (blur) reset button
  resetButton.blur();
});
