//! STYLE ÖZELLİĞİNİ ANLAMAK

// const todo = document.querySelectorAll(".list-group-item")[0];
// const todoList = document.querySelector(".list-group");

// const clearButton = document.querySelector("#todoClearButton");

// console.log(clearButton);
// console.log(todoList);
// console.log(todo);

//() todo.style.color = "#fff";
//() todo.style.backgroundColor = "purple";
//() todo.style.fontWeight = "bold";
//() todo.style.paddingLeft = "70px";
//() todo.style.paddingTop = "20px";
//() todoList.style.marginTop = "50px";
//() todoList.style.marginLeft = "50px";

// clearButton.style.backgroundColor = "Red";
// clearButton.style.fontWeight = "bold";
// clearButton.style.padding = "20px";
// clearButton.style.borderRadius = "25px";

//! HTML ELEMENTLERİ ÜZERİNDE GEZİNME

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const todoLastChild = document.querySelectorAll(".list-group-item:nth-child(4)");
// const card = document.getElementsByClassName("card");
// const card = document.querySelector(".card");
// const row = document.querySelector(".row");
// const container = document.querySelector(".container");
// let value;

//*Anneden çocuklara erişmek
// value = todoList;
// value = todoList.children[0];
// value = todoList.children[2];
// value = todoList.children[todoList.children.length-1];

//* Çocuktan anneye erişmek

// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;

// value = todoLastChild.previousElementSibling;


// value = row.children[0].children[3].children[0].textContent="Todo Listesi Değişti";


// let todo3 = container.children[0].children[0].children[3].children[2].children[2];

// todo3.textContent = "İçerik Değişti.";
// todo3.style.backgroundColor="Red";
// todo3.style.margin="10px";

// console.log(todo3);

//! DİNAMİK OLARAK ELEMENT OLUŞTURMA


// const cardBody = document.querySelectorAll(".card-body")[1];
// const todoList = document.querySelector(".list-group");

// console.log(cardBody);

// const link = document.createElement("a");
// link.id="goBlogWebSite";
// link.className="btn btn-dark btn-sm mt-3";
// link.href = "https://google.com";
// link.target= "_blank";
// link.innerHTML= "Google'a ulaş";

// cardBody.appendChild(link);

// const todo = document.createElement("li");
// const todoLink = document.createElement("a");
// const i = document.createElement("i");

// todo.className="list-group-item d-flex justify-content-between";
// todo.innerHTML = "Todo 5";

// todoLink.href="#";
// todoLink.className="delete-item";

// i.className = "fa fa-remove";

// todoLink.appendChild(i);
// todo.appendChild(todoLink);
// todoList.appendChild(todo);

// console.log(link);



//! ELEMENT SİLMEK 

// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

// console.log(todos);
// todos[0].remove();
// todos[1].remove();
// console.log(todos);

// todoList.removeChild(todos[todos.length-1]);
// todoList.removeChild(todos[0]);

//! ELEMENTLERİ DEĞİŞTİRMEK

// const cardBody = document.querySelectorAll(".card-body")[1];

// const newTitle = document.createElement("h2");
// newTitle.className="card-title";
// newTitle.textContent = "Todo Listesi - Yeni";

// cardBody.replaceChild(newTitle,cardBody.childNodes[1]);

//! MOUSE EVENTLERİ

//? DOMContentLoaded
//? Load
//? click
//? dblclick
//? mouseover
//? mouseout
//? mouseenter
//? mousedown

//* DOMContentLoaded
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     console.log("Sayfa Yüklendi");
// }

//* load
// window.addEventListener("load",run);
// function run(){
//     console.log("Sayfa yüklendi");
// }

//* click
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("click",run);
// function run(e){
//     console.log(e.type);
// }

//* dblClick
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// }

//* mouseOver
// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover",run);
// function run(e) {
//     console.log(e.type);
// }

//* mouseout
// cardBody.addEventListener("mouseout",run);

//* mouseEnter
// cardBody.addEventListener("mouseenter",run);

//* mouseLeave
// cardBody.addEventListener("mouseleave",run);

//! KLAVYE EVENTLERİ

//? keyPress (harf ve sayılarda tetiklenir)
//? keyDown (klavyeden yapılan her harekette tetiklenir)
//? keyUp (tuştan elini çekince çalışır)

//* keyPress
// document.addEventListener("keypress",run);
// function run(e){
//     console.log(e.key);
//     console.log(e.keyCode);
//     console.log(e.which);
// }

//* keyDown
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.key);
// }

//* keyUp
// document.addEventListener("keyup",run);
// function run(e){
//     console.log(e.key);
// }

//* F5 ile sayfa yenilemeyi engelleme
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode===116){
//         alert("Sayfa yenileme işlemi gerçekleştirilemiyor.");
//     }
//     e.preventDefault();
// }


//* TextBoxa girilen değerleri metin kutusuna ekleme
// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");
// input.addEventListener("keyup",run);
// function run(e){
//     cardTitle.textContent = e.target.value;
// }

//! İNPUT EVENTLERİ 

//? focus (inputun içine girince tetiklenir)
//? blur (inputtan çıkınca tetiklenir)
//? copy (inputun içindeki değer kopyalandığında tetiklenir)
//? paste (inputun içine değer yapıştırılırsa tetiklenir)
//? cut (inputun içindeki değer kesilirse tetiklenir)
//? select (inputun içindeki değer seçilirse tetiklenir)

// const todo = document.querySelector("#todoName");

//* focus 
// todo.addEventListener("focus",run);

//* blur
// todo.addEventListener("blur",run);

//* copy
// todo.addEventListener("copy",run);

//* paste
// todo.addEventListener("paste",run);

//* cut 
// todo.addEventListener("cut",run);

//* select
// todo.addEventListener("select",run);

// function run (e){
//     console.log(e.type);
// }