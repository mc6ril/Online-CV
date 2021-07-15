//BURGER

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const title = document.querySelector('.head_title');
const phone = document.querySelector('.phone');
const experience = document.querySelectorAll('.experience_extended');
const arrowExperience = document.querySelectorAll('.fa-arrow-down');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    title.classList.toggle('inactive');
    phone.classList.toggle('inactive');
    menu.classList.toggle('visible');
    nav.classList.toggle('visible');
});

arrowExperience.forEach(function (element, index) {
    arrowExperience[index].addEventListener('click', () => {
        experience[index].classList.toggle('show');
        if (element.style.transform === '') {
            element.style.transition = '0.5s ease-in-out';
            element.style.transform = 'rotateZ(180deg)';
        } else if ((element.style.transform = 'rotateZ(180deg)')) {
            element.style.transition = '0.5s ease-in-out';
            element.style.transform = '';
        }
    });
});
