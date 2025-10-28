const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
observer.observe(document.querySelector('.skills-tags'));
observer.observe(document.querySelector('.skill-tag:nth-child(1)'));
observer.observe(document.querySelector('.skill-tag:nth-child(2)'));
observer.observe(document.querySelector('.skill-tag:nth-child(3)'));
observer.observe(document.querySelector('.skill-tag:nth-child(4)'));
observer.observe(document.querySelector('.skill-tag:nth-child(5)'));
observer.observe(document.querySelector('.skill-tag:nth-child(6)'));
observer.observe(document.querySelector('.skill-tag:nth-child(7)'));
observer.observe(document.querySelector('.skill-tag:nth-child(8)'));
observer.observe(document.querySelector('.skill-tag:nth-child(9)'));
observer.observe(document.querySelector('.skill-tag:nth-child(10)'));



const themeToggle = document.getElementById('theme-toogle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}


themeToggle.addEventListener("click", () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
