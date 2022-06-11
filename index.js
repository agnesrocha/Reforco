const todoInput = document.getElementById('todoInput');

todoInput.addEventListener('keyup',onTextEnter);

function onTextEnter(event)
{
    if(event.key != 'Enter' || event.keyCode != 13 || todoInput.value.trim() ==""){
        return;
    }

    const lista = document.getElementById('lista');
    const inputValue = todoInput.value;


    const newTodo = document.createElement('li');
    const newContent = document.createTextNode(inputValue);
    newTodo.appendChild(newContent);
    lista.appendChild(newTodo);   


}


    //
    //debugger
    //console.log(inputValue);


