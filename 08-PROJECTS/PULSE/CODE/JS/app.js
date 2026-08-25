// DOM ELEMENTS

const taskBtn = document.querySelector(".add-task");
const focusBtn = document.querySelector(".start-focus");
const timer = document.querySelector(".timer");

// queryselectorall selects all elements matching a CSS selector
const checkBoxes = document.querySelectorAll(".checkbox");
const taskElement = document.querySelectorAll(".task");
const statPad = document.querySelectorAll(".stat-card");
const task = document.querySelector(".task")

//event listener for the taskBtn
taskBtn.addEventListener("click", () => {
    taskBtn.textContent = "Task added!";
    // return;
})

// checkboxes
checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", () => {
     const clickedTask = checkBox.closest(".task");

     clickedTask.classList.toggle("completed");
    
    })
});

