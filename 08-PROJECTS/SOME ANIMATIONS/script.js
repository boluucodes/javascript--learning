// assign some variables
const btn = document.querySelector('button');
const box = document.querySelector('.box');


btn.addEventListener('click', () => {
    // box.classList.add('move'); 
    // this adds a css class to the box element when the button is clicked, triggering the animation defined in the CSS.
    
    // to optimize the functionality, we use toggle method to add and remove the class on each click, allowing the animation to be triggered multiple times.
    box.classList.toggle('move');
})


const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
  button.classList.add("clicked");

  setTimeout(() => {
    button.classList.remove("clicked");
  }, 200);
});

const bubbleBtn = document.getElementById("bubble");
bubbleBtn.addEventListener("click", (event)=> {
    // get button's position and size
    const rect = bubbleBtn.getBoundingClientRect();
    // click's position in the btn
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  // create a span element in the HTML
    const effect = document.createElement("span");
// add the ripple to the effect
    effect.classList.add("ripple");
// now position the span
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
// put the ripple in the btn
  bubbleBtn.appendChild(effect);

  effect.addEventListener("animationend", () => {
    effect.remove();
  });
}); 