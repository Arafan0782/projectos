 
for(let i = 0; i < todoList.length; i++){
    const object = todoList[i];

    let nameObject = object.nameTodo;
    let dateObject = object.dateTodo;
    let timeObject = object.timeTodo;

    let htmlTag = `
        <div>${nameObject}</div>
        <div>${dateObject}</div>
        <div>${timeObject}</div>

        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
    `;

    console.log(htmlTag);

    addToHtml += htmlTag;
}



function checking(){
    let inputName = document.querySelector('.name-input').value;
    let inputDate = document.querySelector('#date-input').value;
    let inputTime = document.querySelector('#time-input').value;

    if(inputDate.length === 0 || inputName.length === 0 || inputTime.length === 0){

        // confirm()
       if (confirm("Are you sure that you do not wanna put add the values in todo list?") === 'Ok'){

            addTodoList();

       }else{
            message();
        
       }

    }
}



function message(){
    alert('Then add somenthing, please!')
}