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

// Tooltip

const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

document.body.addEventListener("mousemove", (e) => {
  if (tooltipTriggerEl.contains(e.target) === false) {
    tooltip.hide();
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

// Subtítulos

// let videos = document.querySelectorAll(".teaser");
// videos.forEach(video => {

//     let track = video.addTextTrack("subtitles", "Subtitles", "en");
//     track.mode = "showing";
//     track.addCue(new VTTCue(0.2, 2.8, "In a world where everything is visible..."));
//     track.addCue(new VTTCue(3.2, 7, "Some stories remain hidden, on the verge of extinction."));
//     track.addCue(new VTTCue(8, 11.2, "Stories that hide right before our eyes."));
//     track.addCue(new VTTCue(13, 14.6, "<b>Y¿Delet.exe</b>"));
//     track.addCue(new VTTCue(16, 17.9, "<b>Do you want to run it?</b>"));

// console.log(track.cues);
// });

// Video de la ventana modal

const modal = document.getElementById("modal1");
const video = document.getElementById("teaser");

modal.addEventListener("close", function() {
  tooltip.hide();
});

window.openModal = function() {
    modal.showModal();
    document.body.classList.add("scroll");
};

window.closeModal = function() {
    modal.close();
    video.pause();
    document.body.classList.remove("scroll");
};

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

// Gif animado

const gif = document.getElementById("gif");
const gifMove = "img/tv-animacion.gif";
const gifStatic = "img/tv-animacion.png";

function pausarGif() {
    gif.src = gifStatic;
}

function reanudarGif() {
    gif.src = gifMove;
}

// Seguimiento del mouse

const lookFor = document.querySelector("#busca-play");
const targetVideo = document.querySelector("header");
const offsetX = 90, offsetY = -45;
let shown = false; 

targetVideo.addEventListener("mouseenter", () => {
  if (shown === false) {
    lookFor.style.display = "block";
    lookFor.style.opacity = 1;
    shown = true;
  }
});

targetVideo.addEventListener("mouseleave", () => {
  lookFor.style.opacity = 0;
    setTimeout(() => {
    lookFor.style.display = "none";
    }, 300);
});

targetVideo.addEventListener("mousemove", e => {
  const posicionX = e.clientX + offsetX;
  const posicionY = e.clientY + offsetY;
  lookFor.style.left = `${posicionX}px`;
  lookFor.style.top = `${posicionY}px`;
});

// Acordeón

document.addEventListener("DOMContentLoaded", function() {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function() {
      const cardBody = button.closest(".card-body");
      const cardText = cardBody.querySelector(".card-text");
      const contentHeight = cardText.scrollHeight + "px";

      if (cardText.style.opacity === "0") {
        cardText.style.opacity = "1";
        cardText.style.height = contentHeight;
        cardText.style.transform = "translateY(0)";
        cardText.style.transform =  "rotateX(0deg)";
      } else {
        cardText.style.opacity = "0";
        cardText.style.height = "0";
        cardText.style.transform = "translateY(-20px)";
        cardText.style.transform = "rotateX(200deg)";
      }
    });
  });
});

// Animación del logotipo

setTimeout(function() {
  document.getElementById("logotipo").style.opacity = "1";
}, 1500);

setTimeout(function() {
  document.getElementById("logotipo").style.animationPlayState = "paused";
}, 4800);


// Reproducir video en pantalla completa

$(document).ready(function() {
    var playButton = $(".fullPlay");
    var video = $(".videos");

    function enterFullscreen() {
        if (video[0].requestFullscreen) {
            video[0].requestFullscreen();
        } else if (video[0].webkitRequestFullscreen) {
            video[0].webkitRequestFullscreen();
        }
    }

    playButton.on("click", function() {
      if (video[0].paused) {
          video[0].play();
          enterFullscreen();
      } else {
          video[0].pause();
      }
  });
});


// Reproducir video en pantalla completa

$(document).ready(function() {
    var playButton = $(".fullPlay");
    var video = $(".videos");

    function enterFullscreen() {
        if (video[0].requestFullscreen) {
            video[0].requestFullscreen();
        } else if (video[0].webkitRequestFullscreen) {
            video[0].webkitRequestFullscreen();
        }
    }

    playButton.on("click", function() {
      if (video[0].paused) {
          video[0].play();
          enterFullscreen();
      } else {
          video[0].pause();
      }
  });
});

// Calendario entradas
$(document).ready(function(){
  // Set the default date to the current date
  var today = new Date();
  var day = String(today.getDate()).padStart(2, '0');
  var month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var year = today.getFullYear();
  var formattedDate = day + '/' + month + '/' + year;
  $('#date').val(formattedDate);

  $('#date').datepicker({
      format: 'dd/mm/yyyy',
      startDate: '-3d',
      autoclose: true
  });
});

// Payment Modal
document.querySelectorAll('.obtener-entrada').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the <a> tag
        console.log('Button clicked'); // Add this line to check if the event is triggered
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const feedbackModal = new bootstrap.Modal(document.getElementById("feedbackModal"));

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        // Simulate form submission for demonstration purposes
        setTimeout(() => {
            feedbackModal.show();
            form.reset(); // Reset the form fields
        }, 1000);

    });
});
});
