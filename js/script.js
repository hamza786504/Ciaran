// blue #191627 
// white #fbfbfe



document.getElementById("burger_btn").addEventListener("click", function () {
    document.querySelector(".navigation").style.display = "block";
    document.getElementById("burger_btn").style.display = "none";
    document.getElementById("close_btn").style.display = "block";

    const tag1 = document.querySelectorAll(".header .navigation .menu ul li a");

    if (window.innerWidth < 768) {
    Array.from(tag1).forEach(element => {
        element.style.color = "white";
    });
    }
});

document.getElementById("close_btn").addEventListener("click", function () {
    document.querySelector(".navigation").style.display = "none";
    document.getElementById("burger_btn").style.display = "flex";
    document.getElementById("close_btn").style.display = "none";
});

document.getElementById("moon_btn").addEventListener("click", function () {
    document.documentElement.style.setProperty('--body-background', '#191627');
    document.documentElement.style.setProperty('--body-background', '#191627');
    document.getElementById("footer").style.backgroundColor = "#17161f";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.querySelector(".header .navbar-brand").style.color = "white";


    const burgerbutton = document.querySelectorAll("#burger_btn div");
    Array.from(burgerbutton).forEach(element => {
        element.style.backgroundColor = "white";
    });


    const tag1 = document.querySelectorAll(".header .navigation .menu ul li a");
    Array.from(tag1).forEach(element => {
        element.style.color = "white";
    });


    const tag = document.querySelectorAll(".service_card");
    Array.from(tag).forEach(element => {
        element.style.backgroundColor = "#211d35";
        element.style.border = "0px"
    });

    document.documentElement.style.setProperty('--text-color', '#fbfbfe');
    const elements = document.querySelectorAll("hero_section icon_box a");
    Array.from(elements).forEach(element => {
        element.style.color = "white";
    });



    if (window.innerWidth > 768) {
        document.getElementById("burger_btn").style.display = "none";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "none";
        document.getElementById("sun_btn").style.display = "block";
    } else {
        document.querySelector(".navigation").style.display = "none";
        document.getElementById("burger_btn").style.display = "flex";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "none";
        document.getElementById("sun_btn").style.display = "block";
    }
});


document.getElementById("sun_btn").addEventListener("click", function () {
    document.documentElement.style.setProperty('--body-background', '#fbfbfe');
    document.documentElement.style.setProperty('--text-color', '#191627');
    document.getElementById("header").style.backgroundColor = "#fbfbfe";
    document.querySelector(".header .navbar-brand").style.color = "";

    const tag1 = document.querySelectorAll(".header .navigation .menu ul li a");
    Array.from(tag1).forEach(element => {
        element.style.color = "black";
    });

    const burgerbutton = document.querySelectorAll("#burger_btn div");
    Array.from(burgerbutton).forEach(element => {
        element.style.backgroundColor = "black";
    });
    
    const tag = document.querySelectorAll(".service_card");
    Array.from(tag).forEach(element => {
        element.style.backgroundColor = "white";
        element.style.border = "1px solid #00000034";
    });

    document.getElementById("footer").style.backgroundColor = "#6e57e0";
    document.getElementById("moon_btn").style.display = "block";
    document.getElementById("sun_btn").style.display = "none";
    if (window.innerWidth > 768) {

    } else {
        document.querySelector(".navigation").style.display = "none";
        document.getElementById("burger_btn").style.display = "flex";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "block";
        document.getElementById("sun_btn").style.display = "none";
    }
});



window.onscroll = function () {
    if (window.innerWidth < 768) {
        const display_value = document.querySelector(".navigation").style.display;
        if (display_value === "block") {
            document.querySelector(".navigation").style.display = "none";
            document.getElementById("burger_btn").style.display = "flex";
            document.getElementById("close_btn").style.display = "none";
        }
    }
};


const educationBtn = document.getElementById("education_btn");
const workBtn = document.getElementById("work_btn");

workBtn.addEventListener("click", () => {
    educationBtn.classList.toggle("active");
    workBtn.classList.toggle("active");
    document.querySelector(".work_boxes").style.display = "block";
    document.querySelector(".education_boxes").style.display = "none";
});
educationBtn.addEventListener("click", () => {
    educationBtn.classList.toggle("active");
    workBtn.classList.toggle("active");
    document.querySelector(".work_boxes").style.display = "none";
    document.querySelector(".education_boxes").style.display = "block";
});



const closeModelbtn = document.querySelectorAll(".close_model");



Array.from(closeModelbtn).forEach(element => {
    element.addEventListener("click", function(){
        document.querySelector(".model_one_cover").style.display = "none";
        document.querySelector(".fixed_back").style.display = "none";
    })
});


const server_one_viewMore = document.getElementById("server_one_viewMore");
const server_two_viewMore = document.getElementById("server_two_viewMore");
const server_three_viewMore = document.getElementById("server_three_viewMore");



server_one_viewMore.addEventListener("click" , function(){
    document.querySelector(".fixed_back").style.display = "block";
    document.querySelector(".model_one_cover").style.display = "block";
    document.querySelector(".model_two_cover").style.display = "none";
    document.querySelector(".model_three_cover").style.display = "none";
});
server_two_viewMore.addEventListener("click" , function(){
    document.querySelector(".fixed_back").style.display = "block";
        document.querySelector(".model_two_cover").style.display = "block";
        document.querySelector(".model_one_cover").style.display = "none";
    document.querySelector(".model_three_cover").style.display = "none";
});
server_three_viewMore.addEventListener("click" , function(){
    document.querySelector(".fixed_back").style.display = "block";
        document.querySelector(".model_three_cover").style.display = "block";
        document.querySelector(".model_two_cover").style.display = "none";
    document.querySelector(".model_one_cover").style.display = "none";
});




