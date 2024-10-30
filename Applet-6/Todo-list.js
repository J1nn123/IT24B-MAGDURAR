document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-button';
        doneButton.addEventListener('click', () => {
            taskItem.classList.toggle('done'); // Toggle the 'done' class to mark/unmark as completed
        });

      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => taskList.removeChild(taskItem));

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(doneButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});