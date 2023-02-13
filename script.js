let hamburger = document.querySelector(".hamburger");
let midshow = document.querySelector(".mid")



hamburger.addEventListener('click',()=>{
    midshow.classList.toggle("mid-show");
    hamburger.classList.toggle('ham');
})