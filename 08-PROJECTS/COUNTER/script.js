// declare the variables and assign them to the elements in the DOM
const counter = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// initialize the counter value
let count = 0;
function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.className = 'positive';
    } else if (count < 0) {
        counter.className = 'negative';
    } else {
        counter.className = 'zero';
    }
}
updateCounter();

// increment btn event listener
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// decrement btn event listener
decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

// reset btn event listener
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

