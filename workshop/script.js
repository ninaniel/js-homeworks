'use strict';
const mainWraper = document.getElementById("post-block");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");
const content = document.getElementById("content");
const addButton = document.getElementById("add");
const newPost = document.getElementById("new-post");
const form = document.getElementById("form");


// აჯაქს ფუნქციას პირველ პარამეტრად გადავცემ ლინკს, სადაც მივდივარ 
//ხოლო მეორე პარამეტრად გადავცემ ფუნქციას, რომელიც მინდა შესრულდეს, თუ წარმატებით მივალ
//ajax(url, callback) და ფუნქციაში ვუწერ 100 პოსტის შექმნის ლოგიკად 
function ajax(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", function(){
    //    let pasuxiText = request.responseText;
    //    let pasuxiJs = JSON.parse(pasuxiText);
    let dataJs = JSON.parse(request.responseText);
    callback(dataJs);

    // dataJs.forEach(item => {
    //     createPostBlock(item);
    // });


    })
    request.send();
    
}

ajax("https://jsonplaceholder.typicode.com/POSTS", function(dataJs){
    dataJs.forEach(item => {
        createPostBlock(item);
    });
});
// item არის თითოეული პოსტი 
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


// პოსტის წაშლის ღილაკი , გაწერილია პოსტის პოაპაპდე, რომ არ შეასრულოს დივ - ის კლიკი
    deleteButton.addEventListener ("click", function(event){
        event.stopPropagation();

        let id = event.target.getAttribute("data-id");
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch (url, {
            method: "DELETE"
        })
        .then(() => divWraper.remove());

    });   

// პოპაპი აღწერით // პოსტზე დაჭერის ლოგიკა
    divWraper.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");  
        //ამ id ში შენახულია კონკრეტული დივის data-id ის მნიშვნელობა
        overlay.classList.add('active-overlay');
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        ajax(url, function(dataJs) {
            overlayFunction(dataJs);
        });

    });


    mainWraper.appendChild(divWraper);

}
//postis body მოგვაქვს ამ ფუნქციით
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

})

//ფორმის დასაბმითებისას რომ არ დარეფრეშდეს
form.addEventListener ("submit", function(event) {
    event.preventDefault();
    let formInfo = {
        title: event.target[0].value
    }
    fetch ("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Content-type": "application/json; charset-UTF-8",
        },


    });
    .then
})
