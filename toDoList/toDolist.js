const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondaryCardBody = document.querySelector(".list-group");
const clearButton = document.querySelector("#todoClearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondaryCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click",allTodosEverywhere);
    filterInput.addEventListener("keyup",filter);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                //
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display : none !important");
            }
        });
    }else{
        showAlert("warning", "Filtreleme yapabilmek için en az 1 tane todo olması gereklidir.");
    }
}

function allTodosEverywhere(){
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        //ekrandan silme
        todoListesi.forEach(function(todo){
            todo.remove();
        });
        //storageden silme
        todos=[];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde veriler silinmiştir.");
    }else{
        showAlert("warning","Silmek için en az bir Todo olmalıdır");
    }
    console.log(todoListesi);
}

function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){
        //Ekranda Silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        
        //Storageden Silme
        removeTodoToStorage(todo.textContent);

        showAlert("success", "Todo başarıyla silinmiştir.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("danger","Todo Eklenemedi.");
    } else {
        //arayüze ekleme
        addTodoToUI(inputText);
        addTodoStorage(inputText);
        showAlert("success","Todo Eklendi.");
    }
    //storage ekleme
    e.preventDefault();  //todo sayfada yapılan eylemin engellenmesine yarar.
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
}

function addTodoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type,message){
    const div = document.createElement("div");
    // div.className="alert alert-"+type;
    div.className=`alert alert-${type}`; //literals template
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500);
}