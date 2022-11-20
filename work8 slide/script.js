let dataSlider = [
    {
        id:1,
        imageUrl: "https://adventuresportsjournal.com/wp-content/uploads/2019/02/Crossley_20180508__O2B4453.jpg",
        title: "title1"
    },
    {
        id:2,
        imageUrl: "https://www.climbing.com/wp-content/uploads/2014/04/5250487136_174064c924_o.jpg?width=730",
        title: "title2"
    },
    {
        id:3,
        imageUrl: "https://adventuresportsjournal.com/wp-content/uploads/2019/02/Crossley_20180508__O2B4453.jpg",
        title: "title3"
    },
    {
        id:4,
        imageUrl: "https://www.climbing.com/wp-content/uploads/2014/04/5250487136_174064c924_o.jpg?width=730",
        title: "title4"
    }
]



const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let dotItem = document.getElementsByClassName("dots");




function createDiv(item) {
    //item არის მასივიდან დაბრუნებული აითემი, თითოეული ობიექტი
    const div = document.createElement("div");
    div.classList.add ("slide");
    return div;
}

function createImg(item) {
    const img = document.createElement("img");
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.title);
    return img;
}

function createH2(item) {
    const title = document.createElement("h2");
    title.textContent = item.title;
    return title;
}

function createDots(item){
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsWraper");
    dataSlider.forEach(element => {
        const dot = document.createElement("div");
        dot.classList.add("dots");
        dot.setAttribute ("data-id", element.id - 1);

        dot.addEventListener("click", function(event) {
            let id = event.target.getAttribute("data-id");
            sliderIndex = id;
            setSlide();
        })

        dotsParent.appendChild(dot);

    })
    return dotsParent;
}

//მთავარი ლოგიკა/ფუნქცია, რომელიც განსაზღვრავს 
//რომელი სლაიდი გამოჩნდეს

function setSlide() {
    //გავასუფთავოთ რომ წაიშალოს არსებული სლაიდი
    sliderContent.innerHTML = " ";
    const slideDiv = createDiv(dataSlider[sliderIndex]);
// ამ ცვლადში შენახულია დივ ში განთავსებული ინფო, რადგან 
//createDiv ფუნქცია აბრუნებს დივ -ს. 
    const imgTag = createImg(dataSlider[sliderIndex]);
    const h2Tag = createH2(dataSlider[sliderIndex]);
    const dots = createDots();

    slideDiv.appendChild(imgTag);
    slideDiv.appendChild(h2Tag);

    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(dots);

    dotItem[sliderIndex].classList.add("dots-active");

}

//სლიდერის ფუნქცია , კლიკები 
function arrowLeftClick() {
    if (sliderIndex == 0 ){
        return;
    }
    // sliderIndex = sliderIndex -1;
    // sliderIndex -= 1;
    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex == dataSlider.length - 1) {
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener ("click", arrowLeftClick);
arrowRight.addEventListener ("click", arrowRightClick);

// setInterval( () => {
//     arrowRightClick();
// }, 4000);
// //4 წმ ში რომ განმეორდე ვამრავლებ 1000 ზე splidejs.com 
setSlide();
