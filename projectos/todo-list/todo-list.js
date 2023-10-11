
// At first we created an empty array
const todoList = [];

function renderTodoList (){
    let addToHtml = '';
    
    todoList.forEach((object, index) => {
        let nameObject = object.nameTodo;
        let dateObject = object.dateTodo;
        let timeObject = object.timeTodo;

        let htmlTag = `
        <div clas="grid-item">${nameObject}</div>
        <div clas="grid-item">${dateObject}</div>
        <div clas="grid-item">${timeObject}</div>
        <button class="deleteButton" onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        ">Delete</button>
    `;

        addToHtml += htmlTag;

    })

    // to render on html page
    let finalResult = document.querySelector('.js-result');
    finalResult.innerHTML = addToHtml;

    if(addToHtml == ''){
        finalResult.innerHTML = `Add new something, please.`
    }
}


// when you click on keyboard Enter:
let enterKeyboard = document.querySelector('.keydown');

enterKeyboard = addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        addTodoList();
        renderTodoList();
    }
});


// To add an todo in list;
function addTodoList (){

    let inputName = document.querySelector('.name-input').value;
    let inputDate = document.querySelector('#date-input').value;
    let inputTime = document.querySelector('#time-input').value;
    let date = new Date();
    let currentTime = date.getHours();
    let minutes = date.getMinutes();
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    let currentDate = date.getDate()


    let newTodoList = {
        nameTodo: inputName || 'without todo name',
        dateTodo: inputDate || `${currentYear}-${0}${currentMonth+1}-${currentDate}`,
        timeTodo: inputTime || `${currentTime}:${minutes}`
    };
   
    todoList.push(newTodoList);
    renderTodoList();

    console.log(todoList);
}