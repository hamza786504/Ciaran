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