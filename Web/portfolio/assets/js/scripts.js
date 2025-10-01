/*const bodyAll = document.querySelector("#body-container");
const contMenu = document.querySelector(".container-menu");
const iconContTool = document.querySelector("#icon-container-tools");
const contToItem = document.querySelector("#container-tools-items");
const ContSectSkill = document.querySelector("#container-section-skills");
const cardSkill = document.querySelector(".card-skills");
const contSectionProj = document.querySelector("#container-section-projects")
const cardProje = document.querySelector(".card-projects");
*/


const secoCard = document.querySelectorAll(".second-card");
const modeLB = document.querySelector(".mode-light-black");
const biGit = document.querySelector(".bi-github");
const moLan = document.querySelector(".mode-language");
const moonFil = document.querySelector(".bi-moon-fill");
const highFil = document.querySelector(".bi-brightness-high-fill");
const listItemMenu = document.querySelectorAll(".list-item-link-menu");
const tollMenu = document.querySelector(".tools-menu");


function lightBlack(){

    for(let i = 0; i < secoCard.length; i++){

        console.log(secoCard)
        secoCard[i].classList.toggle("white");

    }

    biGit.classList.toggle("white");
    moonFil.classList.toggle("white");
    highFil.classList.toggle("white");
    
    for(let i = 0; i < listItemMenu.length; i++){

        listItemMenu.classList.toggle("white");

    }


};

function molanguage(){

    alert("Futuras Modificações");

};

modeLB.addEventListener("click", lightBlack);
moLan.addEventListener("click", molanguage);
tollMenu.addEventListener("click", ()=>{

    tollMenu.classList.toggle("open");

});