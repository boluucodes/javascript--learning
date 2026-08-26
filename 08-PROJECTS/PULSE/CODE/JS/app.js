// DOM ELEMENTS
const taskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input");
const taskInputArea = document.querySelector(".task-input-area");
const saveTaskBtn = document.querySelector(".save-task");
const taskList = document.querySelector(".task-list");
const newTask = document.createElement("div");
const focusBtn = document.querySelector(".start-focus");
const resetBtn = document.querySelector(".reset-focus");
const timer = document.querySelector(".timer");
const focusStatus = document.querySelector(".focus-status");
const progressFill = document.querySelector(".progress-fill")
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
    // taskBtn.textContent = "Task added!";
    taskInputArea.style.opacity = 1;
    // return;
})

// add new tasks


saveTaskBtn.addEventListener("click", () => {
        if (taskInput.value === "") {
        return;
    }

    const newTask = document.createElement("div");

    newTask.classList.add("task");

    newTask.innerHTML = `
        <button class="checkbox"></button>

        <div class="task-info">
            <h3>${taskInput.value}</h3>
            <p>Personal</p>
        </div>

        <span class="priority low">
            Low
        </span>
    `;

    taskList.appendChild(newTask);

    taskInput.value = "";

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


const totalTime = 25 * 60;
let timeLeft = totalTime;
let timerInterval;
let isRunning = false;

function displayTime (){
        
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const progress = ((totalTime - timeLeft)/ totalTime * 100);
            progressFill.style.width = `${progress}%`;

            timer.textContent =
                `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

displayTime();

focusBtn.addEventListener("click", () => {
// shorthand for if (isRunning === true) 
// pause timer
   if (isRunning) {
        // pause timer
        clearInterval(timerInterval);

        isRunning = false;
        focusBtn.textContent = "Resume focus session";
        focusStatus.textContent = "Paused"
    } else {

        // START / RESUME
        // resume timer when clicked

        isRunning = true;

        focusBtn.textContent = "Pause focus session";
        focusStatus.textContent = "Running";
        timerInterval = setInterval(() => {

            timeLeft--;

           displayTime();
            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                isRunning = false;

                focusBtn.textContent = "Start focus session";
            }

        }, 1000);

    }


});

//reset btn 
resetBtn.addEventListener("click", () =>{
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    displayTime();

    isRunning = false;
    focusBtn.textContent = "Start focus session";
    focusStatus.textContent = "Ready";
})