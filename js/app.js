window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function(){
    console.log("MENU CLICKED");
    nav.classList.toggle("active");
});

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.15
});

fadeElements.forEach(element => {
    observer.observe(element);
});

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 80;

    const updateCounter = () => {

        if(current < target){

            current += increment;

            counter.innerText = Math.ceil(current);

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.6
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

document.getElementById("year").textContent = new Date().getFullYear();