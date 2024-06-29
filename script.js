// menu button

let menuIcon = document.querySelector('.menu-btn');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('.menu-btn');
    navbar.classList.toggle('nav-links');
}

// slider

const prevbtn= document.querySelector(".prev");
const nextbtn= document.querySelector(".next")
const slider= document.querySelector(".slider");
const card= document.querySelectorAll(".card");

var count=0;

nextbtn.addEventListener("click", ()=>{
    console.log("next")
 count++;
 if(count>3){
    count=0;
}
 console.log(count);

 card.forEach(
    (card,index) =>{
          card.style.transform= `translateX(-${count*102.9  }%)`; 
    });
})

prevbtn.addEventListener("click", ()=>{
    console.log("prev")
    count--;
    if(count<0){
        count=0;
    }
    console.log(count);

    card.forEach(
        (card,index) =>{
              card.style.transform=  `translateX(-${count*102.5}%)`;
        });
})




