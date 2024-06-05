//! Selectors (Seçiciler) - Style Özellikleri
//? className, id, tagName
//* getElementById : id ye göre elementi yakalar
//* getElementByClassName : class ismine göre elementleri yakalar
//* getElementByTagName : etiket ismine göre elementleri yakalar


// const button = document.getElementById("todoAddButton");


// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList;

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.innerHTML="<b>Todo Ekleyin</b>";


// const todoList = document.getElementsByClassName("list-group-item");
// console.log(todoList);

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
//(!) todoList.forEach(function(todo){
//     console.log(todo);
// })
// console.log(todoList);

// const forms = document.getElementsByTagName("form");
// console.log(forms);

// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);


//! querySelector = querySelectorAll 

// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// const todoList = document.querySelectorAll("li:nth-child(odd)");
// console.log(todoList);