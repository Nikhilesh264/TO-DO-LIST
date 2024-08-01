
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const prioritySelect = document.getElementById('priority-select');
const categorySelect = document.getElementById('category-select');
const dueDateInput = document.getElementById('due-date-input');
const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');

// Function to update the date and time display
function updateDateTime() {
  const currentDate = new Date();
  dateElement.textContent = currentDate.toLocaleDateString();
  timeElement.textContent = currentDate.toLocaleTimeString();
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Function to create a new task element
function createTaskElement(task, priority, category, dueDate, completed) {
  const taskElement = document.createElement('li');
  taskElement.classList.add('task-item');

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = completed;
  taskCheckbox.addEventListener('change', () => {
    taskElement.classList.toggle('completed');
  });

  const taskLabel = document.createElement('label');
  taskLabel.textContent = task;

  const priorityLabel = document.createElement('span');
  priorityLabel.textContent = Priority: ${priority};

  const categoryLabel = document.createElement('span');
  categoryLabel.textContent = Category: ${category};

  const dueDateLabel = document.createElement('span');
  dueDateLabel.textContent = Due: ${dueDate};

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskElement);
  });

  taskElement.appendChild(taskCheckbox);
  taskElement.appendChild(taskLabel);
  taskElement.appendChild(priorityLabel);
  taskElement.appendChild(categoryLabel);
  taskElement.appendChild(dueDateLabel);
  taskElement.appendChild(deleteButton);

  return taskElement;
}

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const priority = prioritySelect.value;
    const category = categorySelect.value;
    const dueDate = dueDateInput.value;
    const taskElement = createTaskElement(taskText, priority, category, dueDate, false);
    taskList.appendChild(taskElement);
    taskInput.value = '';
  }
}

// Add event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);