// blue #191627 
// white #fbfbfe



document.getElementById("burger_btn").addEventListener("click", function(){
    document.querySelector(".navigation").style.display = "block";
    document.getElementById("burger_btn").style.display = "none";
    document.getElementById("close_btn").style.display = "block";
});

document.getElementById("close_btn").addEventListener("click", function(){
    document.querySelector(".navigation").style.display = "none";
    document.getElementById("burger_btn").style.display = "flex";
    document.getElementById("close_btn").style.display = "none";
});

document.getElementById("moon_btn").addEventListener("click" , function(){
    document.documentElement.style.setProperty('--body-background', '#191627');
    document.getElementById("footer").style.backgroundColor = "#17161f";
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



    if(window.innerWidth > 768){
        document.getElementById("burger_btn").style.display = "none";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "none";
        document.getElementById("sun_btn").style.display = "block";
    }else{
        document.querySelector(".navigation").style.display = "none";
        document.getElementById("burger_btn").style.display = "flex";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "none";
        document.getElementById("sun_btn").style.display = "block";
    }
});


document.getElementById("sun_btn").addEventListener("click" , function(){
    document.documentElement.style.setProperty('--body-background', '#fbfbfe');
    document.documentElement.style.setProperty('--text-color', '#191627');
    const tag = document.querySelectorAll(".service_card");
    Array.from(tag).forEach(element => {
        element.style.backgroundColor = "white";
        element.style.border = "1px solid #00000034";
    });

    document.getElementById("footer").style.backgroundColor = "#6e57e0";
    document.getElementById("moon_btn").style.display = "block";
        document.getElementById("sun_btn").style.display = "none";
    if(window.innerWidth > 768){
        
    }else{
        document.querySelector(".navigation").style.display = "none";
        document.getElementById("burger_btn").style.display = "flex";
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("moon_btn").style.display = "block";
        document.getElementById("sun_btn").style.display = "none";
    }
});



window.onscroll = function() {
    if(window.innerWidth < 768){
        const display_value = document.querySelector(".navigation").style.display;
        if(display_value === "block"){
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