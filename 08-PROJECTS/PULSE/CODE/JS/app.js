// DOM ELEMENTS
const taskBtn = document.querySelector(".add-task");
const focusBtn = document.querySelector(".start-focus");
const timer = document.querySelector(".timer");
const totalTextCount = document.querySelector(".total-text-count");
const completedTextCount = document.querySelector(".completed-text-count");
const remainingTextCount = document.querySelector(".remaining-text-count");
const completionPercentDisplay = document.querySelector(".completion-percent");


// queryselectorall selects all elements matching a CSS selector
const checkBoxes = document.querySelectorAll(".checkbox");
const taskElement = document.querySelectorAll(".task");
const statPad = document.querySelectorAll(".stat-card");
// const task = document.querySelector(".task")
const strong = document.querySelectorAll("strong");


//event listener for the taskBtn
taskBtn.addEventListener("click", () => {
    taskBtn.textContent = "Task added!";
    // return;
})

// calculate tasks stats
function updateStats(){
    const totalTasks = taskElement.length;
    const completedTask = document.querySelectorAll(".task.completed");
    const completedTasks = completedTask.length;
    const remainingTasks = totalTasks - completedTasks;
    const completionPercent = ((completedTasks/totalTasks) * 100).toFixed(0);
// display the calculated value on the page
    totalTextCount.textContent = totalTasks;
    completedTextCount.textContent = completedTasks;
    remainingTextCount.textContent = `${remainingTasks} remaining today`;
    completionPercentDisplay.textContent = `${completionPercent}% of today's work`;

    console.log(totalTextCount);
    console.log(completedTextCount);
    console.log(remainingTextCount);
    console.log(completionPercentDisplay);

  

};

// checkboxes
checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", () => {
     const clickedTask = checkBox.closest(".task");

     clickedTask.classList.toggle("completed");
     updateStats();
     
    })
});



// Calculate the correct statistics
// when the page first opens.

updateStats();

// timer


let timeLeft = 25 * 60;
let timeInterval;
let isRunning = false;
let isPaused = false;

focusBtn.addEventListener("click", () => {

    if (isRunning) {
        return;
    }

    isRunning = true;
    focusBtn.textContent = "Focus session running";

    timerInterval = setInterval(() => {

        timeLeft--;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timer.textContent =
            `${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            isRunning = false;

            focusBtn.textContent = "Start focus session";
        }

    }, 1000);



});