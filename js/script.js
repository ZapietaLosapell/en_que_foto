document.addEventListener("DOMContentLoaded", function () {

// Lenis
    const lenis = new Lenis({
        lerp: 0.08,
        // autoRaf: true,
        wheelMultiplier: 0.95,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
      
    requestAnimationFrame(raf);
    

// GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".vhs", {
      backgroundPosition: "100% 50%",
      ease: "none",
        scrollTrigger: {
          trigger: ".vhs",
          start: "top bottom",
          end: "bottom top", 
          scrub: true 
    }
});


// Aviso

const close = document.getElementById("close");
const aviso = document.getElementsByClassName("aviso");
const fixed1 = document.querySelector(".fixed-1");
const fixed2 = document.querySelector(".fixed-2");

for (let i = 0; i < aviso.length; i++) {
    close.addEventListener("click", () => {
        aviso[i].style.opacity = "0";
        setTimeout(() => {
            aviso[i].style.pointerEvents = "none";
            }, 500);
    });
}

fixed2.addEventListener("mouseover", function() {
  fixed1.classList.add("hover-opacity-1");
});

fixed2.addEventListener("mouseout", function() {
  fixed1.classList.remove("hover-opacity-1");
});

// Cierre del menu

const navbarCollapse = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const transition = document.querySelector(".navbar-collapse");
const x = document.querySelector(".btn-menu-icon");

transition.style.transition = ".5s ease-out";

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    transition.style.opacity = "0";
    setTimeout(() => {
        navbarCollapse.classList.remove("show");
        x.classList.toggle("m");
        transition.style.opacity = "1";
    }, 500);
  });
});

x.addEventListener("click", function() {
  this.classList.toggle("m");
});

// AOS

AOS.init();

AOS.init({
  duration: 500,
  easing: "ease-out-quart",
  offset: 200,
  once: true,
  delay: 200,
});


// Reproducir video en pantalla completa

$(document).ready(function () {

    $(".fullPlay").on("click", function () {

        // Contenedor del botón pulsado
        const contenedor = $(this).closest(".v");

        // Vídeo correspondiente
        const video = contenedor.find(".videos")[0];

        if (!video) return;

        // Reproducir
        video.play();

        // Pantalla completa
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }

    });

});

});
