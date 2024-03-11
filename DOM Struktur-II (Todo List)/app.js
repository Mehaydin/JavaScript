
//DOM Html
document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const clearBtn = document.getElementById('clearBtn');

    //Tasklari localStorage'dan yükle
    loadTasks();

    // Form gönderimi için 
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTask(taskText);
            taskInput.value = '';
        }
    });

    // Tüm Todo'lari temizlemek için
    clearBtn.addEventListener('click', function() {
        clearTasks();
    });

    // Listeye Task ekleme
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'removeBtn';
        removeBtn.addEventListener('click', function() {
            li.remove();
            removeTask(taskText);
        });
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Task'lari localStorage'a kaydetme
    function saveTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(taskText) {
            addTask(taskText);
        });
    }

    // Function to remove task from localStorage
    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(function(task) {
            return task !== taskText;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to clear all tasks
    function clearTasks() {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    }
});

