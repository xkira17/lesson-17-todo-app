const app = document.querySelector('#app')
const tasks = document.querySelector('#tasks')

function setHeaders(addHeaders) {
    return {
        Authorization: 'Bearer ' + localStorage.getItem('todo-token'),
        ...addHeaders,
    }
}

function getAllTasks() {
    fetch('http://todo.paydali.uz/api/tasks', {
        headers: setHeaders(),
    })
    .then(res => res.json())
    .then(data => renderTasks(data.payload))
}

getAllTasks()

function renderTasks(tasksArray) {
    tasks.innerHTML = ''
    tasksArray.map(item => {
        tasks.innerHTML += `
            <li class="task-item" onclick="deleteTask('${item.id}')">
                ${item.task}

                <div>
                    <button class="btn">Delete</button>
                </div>
            </li>
        `
    })
}

function deleteTask(taskId) {
    fetch(`http://todo.paydali.uz/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: setHeaders(),
    })
    .then(res => res.json)
    .then(data => {
        getAllTasks()
    })
}