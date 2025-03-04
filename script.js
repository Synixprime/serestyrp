let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay:450,
    reset: true
})

document.addEventListener("DOMContentLoaded", function () {
    // Créer l'élément de lueur
    const glow = document.createElement("div");
    glow.classList.add("mouse-glow");
    document.body.appendChild(glow);

    // Déplacer la lueur avec la souris
    document.addEventListener("mousemove", function (e) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});


sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});