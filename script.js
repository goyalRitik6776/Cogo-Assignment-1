const navbar = document.querySelector('.navbar');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

button1.addEventListener("click",activeButton1);
button2.addEventListener("click",activeButton2);

window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

function activeButton1() {
    button1.style.backgroundColor = "#fbdc00";
    button2.style.backgroundColor = "#e5dfdf";
    document.querySelector('.how-it-works-image-container-2').style.display = "none";
    document.querySelector('.how-it-works-image-container-1').style.removeProperty("display");
}

function activeButton2() {
    button2.style.backgroundColor = "#fbdc00";
    button1.style.backgroundColor = "#e5dfdf";
    document.querySelector('.how-it-works-image-container-1').style.display = "none";
    document.querySelector('.how-it-works-image-container-2').style.removeProperty("display");
}
