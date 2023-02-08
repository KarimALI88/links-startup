var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" activee", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

// end slider 

/**
 * starting nav js
 */

// add class navbarDark on navbar
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=150) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// support


const faqSection=document.getElementById("FAQ");
const sectionToBeActive=document.getElementById("hid");
const form=document.querySelector("#Form-logIn");
const input=document.querySelectorAll("input");
faqSection.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("fuc");
        sectionToBeActive.classList.toggle("hid");
    });
    
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Name=form['form-name'].value;
    const Email=form["form-email"].value;
    const Subject=form['form-Subject'].value;
    const Text=form['form-text'].value;
    console.log(Name, Email , Subject , Text);
});

