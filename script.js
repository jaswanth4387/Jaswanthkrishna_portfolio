// ===== NAVBAR ACTIVE LINK =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// ===== SCROLL ANIMATION (CLEAN VERSION) =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ===== CERTIFICATE POPUP =====
const images = document.querySelectorAll('.cert-img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        popup.classList.add('active');
        popupImg.src = img.src;
    });
});

popup.addEventListener('click', () => {
    popup.classList.remove('active');
});