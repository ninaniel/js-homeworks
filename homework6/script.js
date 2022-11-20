// XML

function listUsers() {
 let request = new XMLHttpRequest();

 request.addEventListener("load", function(){
    let pasuxiText = this.responseText;
    let pasuxiJs = JSON.parse(this.responseText);

    let ul = document.createElement("ul");
    pasuxiJs.data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = `${element.name} ${element.year}`;
        ul.appendChild(li);   
    });
    document.getElementById('users').appendChild(ul);

 })


request.open ('GET', "https://reqres.in/api/unknown");
request.send();
}
listUsers();


//fetch
let currentPage = 1;
let totalPages;

function getUsers(page) {
    fetch("https://reqres.in/api/users?page=" + page, {
        method: "GET",
    })
    .then (function (responseTextInfo){
        if (responseTextInfo.status !== 200) {
            throw responseTextInfo.status;
        }
        return responseTextInfo.json();
    })
    .then (function (resposnseJsData){
        const fragment = new DocumentFragment();
        resposnseJsData.data.forEach ((element) => {
            let list = document.createElement("li");
            
            let images = document.createElement("img");

            li.textContent = `${element.first_name} ${element.last_name }`;
            images.src = element.avatar;

            fragment.appendChild(list);
            fragment.appendChild(images);
        })

        document.getElementById('user-list').innerHTML = ' ';
        document.getElementById('user-list').appendChild(fragment);
        totalPages = resposnseJsData.total_pages;
    })
    .catch(function (error) {
        if (error == 404) {
          let p = document.createElement("p");
          p.textContent = "Page Not found";
  
          document.getElementById("users-info").appendChild(p);
        } else if (error == 500) {
          let p = document.createElement("p");
          p.textContent = "Server Error";
  
          document.getElementById("users-info").appendChild(p);
        }
      });
}


document.getElementById('previous').addEventListener('click', function() {
    if (currentPage == 1) {
      return;
    }
    currentPage -= 1;
    getUsers(currentPage);
  })
  
  document.getElementById('next').addEventListener('click', function() {
    if (currentPage == totalPages) {
      return;
    }
    currentPage += 1;
    getUsers(currentPage);
  })
  
getUsers(currentPage);
