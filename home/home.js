function openNav() {
    document.getElementById("myNav").style.height = "100%";
}




function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




//SPLASH SCREEN




let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{


        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);


        setTimeout(()=>{
            intro.style.top='-100vh';


        }, 2300)


    })
})


ScrollReveal().reveal("header", {delay: 3500});
ScrollReveal().reveal(".picture", {origin:'top'});
ScrollReveal().reveal(".intro-text", {origin: 'bottom'});
ScrollReveal().reveal("#lion", {easing: 'ease-in', distance: '90%', origin: 'bottom', duration: '2000'});
ScrollReveal().reveal("#elephant", {easing: 'ease-in', distance: '90%', origin: 'top', duration: '2000'});
ScrollReveal().reveal("#giraffe", {easing: 'ease-in', distance: '90%', origin: 'bottom', duration: '2000'});
