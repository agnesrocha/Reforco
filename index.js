function btnClick(){
    const todoInput = document.getElementById('todoInput');
    const lista = document.getElementById('lista');
    const inputValue = todoInput.value;


    const newTodo = document.createElement('li');
    const newContent = document.createTextNode(inputValue);
    newTodo.appendChild(newContent);
    lista.appendChild(newTodo);
    

    //
    //debugger
    //console.log(inputValue);
}