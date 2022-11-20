'use strict';
const mainWraper = document.getElementById("post-block");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");
const content = document.getElementById("content");
const addButton = document.getElementById("add");
const newPost = document.getElementById("new-post");
const form = document.getElementById("form");
const input = document.getElementById("titlepost");



function ajax(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", function(){

    let dataJs = JSON.parse(request.responseText);
    callback(dataJs);
    })
    request.send();
    
}

ajax("https://jsonplaceholder.typicode.com/POSTS", function(dataJs){
    dataJs.forEach(item => {
        createPostBlock(item);
    });
});

function createPostBlock(item) {
    const divWraper = document.createElement ("div");
    divWraper.classList.add("posts");
    divWraper.setAttribute("data-id", item.id );

    const h3Post = document.createElement("h3");
    h3Post.textContent = item.id;

    const h2Post = document.createElement("h2");
    h2Post.textContent = item.title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete this Post"
    deleteButton.setAttribute("data-id", item.id);

    divWraper.appendChild(h3Post);
    divWraper.appendChild(h2Post);
    divWraper.appendChild(deleteButton);


    deleteButton.addEventListener ("click", function(event){
        event.stopPropagation();

        let id = event.target.getAttribute("data-id");
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch (url, {
            method: "DELETE"
        })
        .then(() => divWraper.remove());

    });   


    divWraper.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");  
        
        overlay.classList.add('active-overlay');
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        ajax(url, function(dataJs) {
            overlayFunction(dataJs);
        });

    });


    mainWraper.appendChild(divWraper);

}

function overlayFunction(item) {
 const description = document.createElement("p");
 description.textContent = item.body;
 content.appendChild(description);

}


close.addEventListener("click", function(){
    overlay.classList.remove("active-overlay");
    content.innerHTML = " ";
})



//ახალი პოსტის დამატება
addButton.addEventListener("click", function(){
    newPost.classList.add("addPost");
    input.value = " ";

})

form.addEventListener ("submit", function(event) {
    event.preventDefault();
    let formInfo = {
        title: event.target[0].value,
    };

    fetch ("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Content-type": "application/json; charset-UTF-8",
        },
        
    })
    // .then ((response) => response.JSON())
    .then ((item) => {
        createPostBlock(item);
        newPost.classList.remove("addPost");

    });


});