'use strict';

let inputText = document.querySelector('.input');
let addButton = document.querySelector('.button-add');
let clearButton = document.querySelector('.clear');
let uList = document.querySelector('.ul-list');

addButton.addEventListener('click', function(event){
    event.preventDefault();
    let newValue = inputText.value;
    if (newValue == " ") {
        return;
    }
    let listItems = document.createElement('li');
    listItems.innerText = newValue;
    let deleteSelected = document.createElement('i');
    deleteSelected.classList.add("fa-solid", "fa-trash-can");
    deleteSelected.addEventListener('click', function() {
        listItems.remove();
    })
    listItems.appendChild(deleteSelected);
    uList.appendChild(listItems);

    inputText.value = " ";

})


clearButton.addEventListener('click', function() {
    uList.remove();
})