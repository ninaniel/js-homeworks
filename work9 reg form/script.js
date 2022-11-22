let formRegistration = document.getElementById("registration");

formRegistration.addEventListener("submit", function (event) {
    event.preventDefault();
    let errors = {};

    let regForm = event.target;


    //username 
    let username = document.getElementById("usernamefield").value;
    // let username = document.querySelector("[name = "username"]").value;

    if (username == "") {
        errors.username = "username field can't be empty";
    }
    if (username !== "" &&  username.length<5) {
        errors.username = "fill in more than 5 symbols";
    }

    //password 

    let password = document.getElementById("passwordfield").value;
    let password2 = document.getElementById("passwordfield2").value;

    if (password == "") {
        errors.passw = " pass can't be empty";
    }
    if (password != password2) {
        errors.passw2 = "passwords do not match";
    }

    //checkbox
    let agree = document.getElementById("agree").checked;
    // if agree == false ნიშნავს რომ თუ არ არის მონიშნული ანუ და check ილი 
    if (!agree) {
        errors.agree = "you must agree with terms..";

    }

    //radio ფორიჩით უნდა გადავუარო, რომ შემოწმდეს რომელიმე მაინც მონიშნლია თუ არა



    // let  gender = false ;
    // regForm.querySelectorAll('[name = 'gender']').forEach((item) => {
    //     if (item.checked) {
    //         gender = true;
    //     }
    // });
    // if (!gender) {
    //     errors.gender = "please select your gender";
    // }

    regForm.querySelectorAll(".error-text").forEach(element => {
        element.textContent = " ";
    });



    for (let item in errors) { //item არის სათითაოდ თითოეული Key ერრორში
        
        let spanContent = document.getElementById("error-" + item);
        if (spanContent) {
            spanContent.textContent = errors[item]; 
        }
    }

    if (Object.keys(errors).length == 0) {
        regForm.submit();
    }




});


// let errors = {
//     username: "username field can't be empty",
//      passw = " pass can't be empty",
//      passw2 = "passwords do not match",
//      agree = "you must agree with terms..",
// }
//errors ობიექტში key არის ის, რაც გაწერილია ინფუთების name -ში!


let showPassword = document.getElementById("showpassword");
let eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", function(){
    if(showPassword.type == "password") {
        showPassword.setAttribute("type", "text");
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        
    } else {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        showPassword.setAttribute("type", "password");
    }
})


//mail validation
let emailFIeld = document.getElementById("email");

emailFIeld.addEventListener("keyup", function() {
    let emailvalue = document.getElementById("email").value;
    let emailError = document.getElementById("emial-error");
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailvalue.match(emailRegex)) {
        emailError.innerText = "mail is valid";
        emailError.style.color = "green";

    }  else {
        emailError.innerText = "mail is not valid";
        emailError.style.color = "red";
    }
   if (emailvalue == "") {
        emailError.innerText == " ";
    }

});

emailFIeld.addEventListener("focus", function(event) {
    event.target.style.border = "2px solid green";
    event.target.style.outline = "none";
});
