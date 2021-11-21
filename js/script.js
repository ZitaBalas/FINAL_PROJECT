
let curr = window.scrollY;
const topBtn = document.getElementById('top');

const displayTopBtn = () => {
    if (window.scrollY > 1000 && window.scrollY !== curr) {
        topBtn.classList.remove('fadeOut');
        topBtn.style.visibility = 'visible';

        setTimeout(() => {
            topBtn.classList.add('fadeOut');
        }, 2000);
        curr = window.scrollY;
    }
}
window.onscroll = () => displayTopBtn();