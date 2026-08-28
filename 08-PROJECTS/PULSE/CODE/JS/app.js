// DOM ELEMENTS
const taskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input");
const taskInputArea = document.querySelector(".task-input-area");
const saveTaskBtn = document.querySelector(".save-task");
const taskList = document.querySelector(".task-list");
const priorityInput = document.querySelector(".task-priority");
const focusBtn = document.querySelector(".start-focus");
const resetBtn = document.querySelector(".reset-focus");
const timer = document.querySelector(".timer");
const viewAllBtn = document.querySelector(".view-all");
const themeToggle = document.querySelector(".theme-toggle");
const focusStatus = document.querySelector(".focus-status");
const progressFill = document.querySelector(".progress-fill")
const totalTextCount = document.querySelector(".total-text-count");
const completedTextCount = document.querySelector(".completed-text-count");
const remainingTextCount = document.querySelector(".remaining-text-count");
const completionPercentDisplay = document.querySelector(".completion-percent");
let tasks = [];
let showAllTasks = false;


// queryselectorall selects all elements matching a CSS selector
const statPad = document.querySelectorAll(".stat-card");
const strong = document.querySelectorAll("strong");


//event listener for the taskBtn

let isTaskInputOpen = false;

taskBtn.addEventListener("click", () => {

    if (isTaskInputOpen) {

        // close input
        taskBtn.textContent = "Add task";
        taskInputArea.style.opacity = 0;
        

        isTaskInputOpen = false;

    } else {

        // open input
        taskBtn.textContent = "Done?";
        taskInputArea.style.opacity = 1;
        taskInputArea.style.pointerEvents = "auto";
        isTaskInputOpen = true;
    }

});

// add new tasks

saveTaskBtn.addEventListener("click", () => {

    if (taskInput.value.trim() === "") {
        return;
    }

    const task = {
        id: Date.now(),
        title: taskInput.value.trim(),
        category: "Personal",
        priority: priorityInput.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    updateStats();

    updateViewAllButton();

    taskInput.value = "";

});

// calculate tasks stats
function updateStats() {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter((task) => {
        return task.completed;
    }).length;

    const remainingTasks = totalTasks - completedTasks;

    let completionPercent = 0;

    if (totalTasks > 0) {
        completionPercent =
            ((completedTasks / totalTasks) * 100).toFixed(0);
    }

    totalTextCount.textContent = totalTasks;

    completedTextCount.textContent = completedTasks;

    remainingTextCount.textContent =
        `${remainingTasks} remaining today`;

    completionPercentDisplay.textContent =
        `${completionPercent}% of today's work`;
}

// light or dark mode

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☾";
         
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☼";

        localStorage.setItem("theme", "dark");
    }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☼";

}

// checkboxes
taskList.addEventListener("click", (event) =>{
    // DELETE TASK
    const deleteButton = event.target.closest(".delete-task");

   if (deleteButton) {

    const clickedTask = deleteButton.closest(".task");

    const taskId = clickedTask.dataset.id;

    console.log("Clicked task:", clickedTask);
    console.log("Data ID:", taskId);

    tasks = tasks.filter((task) => {
        return task.id !== Number(taskId);
    });

    saveTasks();

    renderTasks();

    updateStats();

    updateViewAllButton();

    return;
}

    // COMPLETE TASK
    const checkbox = event.target.closest(".checkbox");

    if (checkbox) {

    const clickedTask = checkbox.closest(".task");

    const taskId = Number(clickedTask.dataset.id);

    const selectedTask = tasks.find((task) => {
        return task.id === taskId;
    });

    selectedTask.completed = !selectedTask.completed;

    saveTasks();

    renderTasks();

    updateStats();
    

}

    
    
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

// local storage code

// save the tasks 
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load the tasks in the storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }

}


// to render tasks

function renderTasks() {

    taskList.innerHTML = "";
    
    let tasksToDisplay;

    if (showAllTasks) {
        tasksToDisplay = tasks;
    } else {
        tasksToDisplay = tasks.slice(0, 4);
    }

    tasksToDisplay.forEach((task) => {

        const newTask = document.createElement("div");

        newTask.classList.add("task");

        newTask.dataset.id = task.id;

        if (task.completed) {
    newTask.classList.add("completed");
}

        newTask.innerHTML = `
            <button class="checkbox"></button>

            <div class="task-info">
                <h3>${task.title}</h3>
                <p>${task.category}</p>
            </div>

            <span class="priority ${task.priority.toLowerCase()}">
                ${task.priority}
            </span>

            <button class="delete-task">×</button>
        `;

        taskList.appendChild(newTask);

    });
}

loadTasks();

renderTasks();

updateStats();

updateViewAllButton();



viewAllBtn.addEventListener("click", () => {

    showAllTasks = !showAllTasks;

    if (showAllTasks) {
        viewAllBtn.textContent = "Show less";
    } else {
        viewAllBtn.textContent = "View all";
    }

    renderTasks();
});

function updateViewAllButton() {

    if (tasks.length > 4) {

        viewAllBtn.style.display = "block";

    } else {

        viewAllBtn.style.display = "none";

        showAllTasks = false;
        viewAllBtn.textContent = "View all";

    }

}