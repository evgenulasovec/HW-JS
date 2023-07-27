document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form'),
        input = form.querySelector('.form-control'),
        ul = document.querySelector('.list-group');
    
    
        let tasks = [];

    const renderList = (taskText, parent) => {
        if (taskText) {
            parent.innerHTML += ` <li class="list-group-item">
        <label class="form-check-label" >
        <input class="form-check-input me-3" type="checkbox"  > ${taskText}</label>
        <button type="button" class="btn-close btn-del" aria-label="Close"></button>
        </li>`;
            input.value = '';
        }
    }

    const markChecked = (taskElements) => {
        taskElements.forEach(li => {
            li.addEventListener('click', () => {
                const checkbox = li.querySelector('.form-check-input');
                if (checkbox.checked) {
                    checkbox.setAttribute('checked', 'true');
                    li.classList.add('list-group-item-success');
                }
                else {
                    checkbox.removeAttribute('checked');
                    li.classList.remove('list-group-item-success');
                }
            })
        })
    }
    const deleteTask = (delBtns) => {
        delBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                tasks.splice(i, 1);
                localStorage.tasks = JSON.stringify(tasks);
            })
        })
    }
    if (localStorage.tasks) {
        tasks = JSON.parse(localStorage.tasks);
        tasks.forEach(task => {
            renderList(task, ul);
        })
        markChecked(ul.querySelectorAll('.list-group-item'));
        deleteTask(ul.querySelectorAll('.btn-del'));

    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        tasks.push(input.value);
        localStorage.tasks = JSON.stringify(tasks);
        renderList(input.value, ul);
        markChecked(ul.querySelectorAll('.list-group-item'));
        deleteTask(ul.querySelectorAll('.btn-del'));

    })
})

/////////////////////////////

// const users = [
//     {
//         userName: 'Evgen',
//         isAdmin: 'true'
//     },
//     {
//         userName: 'Anna',
//         isAdmin: 'false'
//     },
//     {
//         userName: 'Kate',
//         isAdmin: 'false'
//     }
// ]
// // localStorage.setItem('userName', 'Evgen');
// //========
// localStorage.userName = 'Evgen';

// // метод JSON.stringify - перевести в JSON
// // метод JSON.parse() - извлечь из JSON

// localStorage.users = JSON.stringify(users);
// const parsedUsers = JSON.parse(localStorage.users);

// parsedUsers.forEach(user => console.log(user.userName));