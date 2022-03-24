const element = {
    HEADER: document.querySelector('.header'),
    ADD_TASK: document.querySelector('.button_add_task'),
    INPUT_TASK: document.querySelector('.add_task'),
    TODO_CONTAINER: document.querySelector('.todo_container'),
    END_CONTAINER: document.querySelector('.end_container'),
    TASK_ELEMENT: (elementName, className) => {
        let taskElement = document.createElement(elementName);
        taskElement.classList.add(className)
        return taskElement
    },
}

//Добавление таска
element.ADD_TASK.addEventListener('click', () => {
    if (element.INPUT_TASK.value == ''){
        return;
    }
    else{
        //ПЕРЕМЕННЫЕ ЭЛЕМЕНТОВ ТАСКА
        let taskContainer = element.TASK_ELEMENT('div', 'task');
        let taskInput = element.TASK_ELEMENT('input', 'task_input');
        let buttonsContainer = element.TASK_ELEMENT('div', 'task_button_container');
        let buttonReady = element.TASK_ELEMENT('button', 'button_ready');
        let buttonRemove = element.TASK_ELEMENT('button', 'button_remove');
    
        //СОЗДАНИЕ ТАСКА
        element.TODO_CONTAINER.appendChild(taskContainer);
        taskContainer.appendChild(taskInput);
        taskContainer.appendChild(buttonsContainer);
        buttonsContainer.appendChild(buttonReady);
        buttonsContainer.appendChild(buttonRemove);
    
        //ПОЛУЧЕНИЕ И ВСТАВКА ТЕКСТА В ТАСК
        let text = element.INPUT_TASK.value
        taskInput.value += text
        element.INPUT_TASK.value = ""
    
        //КНОПКА О ГОТОВНОСТИ ТАСКА / ПЕРЕМЕЩЕНИЕ 
        buttonReady.addEventListener('click', () => {
            element.END_CONTAINER.append(taskContainer);
            buttonReady.classList.add('ready');
            taskInput.classList.add('r_txt');
        })
        //КНОПКА УДАЛЕНИЯ ТАСКА
        buttonRemove.addEventListener('click', () => {
            taskContainer.remove();
        })
    }
});


