const xhrTodos = new XMLHttpRequest();


function getTodosList() {
    xhrTodos.responseType = 'json';

    xhrTodos.open('GET', 'https://jsonplaceholder.typicode.com/todos');

    xhrTodos.send();

    xhrTodos.onload = function () {

        if (xhrTodos.status !== 200) {
            const requestErrorMessage = `Error requesting todo list. Status: ${xhrTodos.status} ${xhrTodos.statusText}`;
            alert(requestErrorMessage);
        } else {
            const todosArray = xhrTodos.response;
            createTodoList(todosArray);
        }

    }
}

function createTodoList(todos) {
    const divForTodoList = document.createElement('div');
    divForTodoList.id = 'container';
    divForTodoList.className = 'container';
    document.body.prepend(divForTodoList);
    const containerForTodoList = document.getElementById('container');

    const todoHeading = document.createElement('h1')
    todoHeading.className = 'todo-heading';
    todoHeading.append(document.createTextNode('Todo List'))
    containerForTodoList.append(todoHeading);

    const todoList = document.createElement('ul');
    todoList.className = 'todo-list';
    containerForTodoList.append(todoList);

    todos.map((todo) => {
        const todoListItem = document.createElement('li');
        todoListItem.append(document.createTextNode(todo.title));
        todoList.append(todoListItem);

        if (todo.completed === true) {
            todoListItem.className = 'list-item-complete';
        } else {
            todoListItem.className = 'list-item-incomplete';
        }
    });
}

getTodosList();