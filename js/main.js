
const project = document.querySelectorAll(".project");
const projectButtons = document.querySelectorAll(".project-buttons");


for(let i = 0; i<project.length;i++){
    project[i].addEventListener("mouseover",()=>{
        projectButtons[i].classList.remove("hidebuttons")
        projectButtons[i].classList.add("showbuttons")

        project[i].classList.remove("projecthoveroff")
        project[i].classList.add("projecthoveron")
    })

    project[i].addEventListener("mouseout",()=>{
        projectButtons[i].classList.remove("showbuttons")
        projectButtons[i].classList.add("hidebuttons")

        project[i].classList.remove("projecthoveron")
        project[i].classList.add("projecthoveroff")
    })
}

const body = document.querySelector("body");

const modal = document.querySelectorAll(".modal-background");
const modalCard = document.querySelectorAll(".modal");
const viewProjectButton = document.querySelectorAll(".viewproject");
const exitButton = document.querySelectorAll(".exit")


for(let i = 0; i<modal.length;i++){
        viewProjectButton[i].addEventListener("click",()=>{
        modalCard[i].classList.remove("showmodal-popout")
        modal[i].classList.add("showmodal")
        modalCard[i].classList.add("showmodal-popup")
        body.classList.add("scrollock")
    })
    
    exitButton[i].addEventListener("click",()=>{
        modal[i].classList.remove("showmodal")
        modalCard[i].classList.remove("showmodal-popup")
        modalCard[i].classList.add("showmodal-popout")
        body.classList.remove("scrollock")
    })
}

const hamburgerButton = document.querySelector(".hamburger-nav-button")
const hamburgerBackground = document.querySelector(".hamburger-nav-background")
const hamburgerNav = document.querySelector(".hamburger-nav")

let counter = 0;


hamburgerButton.addEventListener("click",()=>{
    body.classList.toggle("scrollock")
    if(counter == 0){
        hamburgerNav.classList.remove("hidehamburgernav");
        hamburgerNav.classList.add("showhamburgernav");
        hamburgerBackground.classList.toggle("showhamburgerbackground")
        counter = 1;
    }

    else if(counter == 1){
        hamburgerNav.classList.remove("showhamburgernav");
        hamburgerNav.classList.add("hidehamburgernav");
        hamburgerBackground.classList.toggle("showhamburgerbackground")
        counter = 0;
    }
})

const hamburgerLink = document.querySelectorAll(".hamburgerlink");
for(let i = 0; i<hamburgerLink.length; i++){
    hamburgerLink[i].addEventListener("click",()=>{
        hamburgerBackground.classList.remove("showhamburgerbackground");
        hamburgerNav.classList.remove("showhamburgernav");
        hamburgerNav.classList.add("hidehamburgernav");
        body.classList.remove("scrollock")
        counter = 0;

    })
}


