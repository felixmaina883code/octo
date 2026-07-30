// ===============================
// DWELL WEBSITE
// script.js
// ===============================

// Smooth scrolling

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = this.getAttribute('href');

        if(target.startsWith('#')){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});

// Simple animation on page load

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.5s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});
