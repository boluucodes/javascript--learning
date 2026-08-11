// assign some variables
const btn = document.querySelector('button');
const box = document.querySelector('.box');


btn.addEventListener('click', () => {
    // box.classList.add('move'); 
    // this adds a css class to the box element when the button is clicked, triggering the animation defined in the CSS.
    
    // to increase the functionality, we use toggle method to add and remove the class on each click, allowing the animation to be triggered multiple times.
    box.classList.toggle('move');
})