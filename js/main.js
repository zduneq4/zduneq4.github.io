const hamburgerBtn = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__mobile");
const allNavItems = document.querySelectorAll('.link');
const logo = document.querySelector('.logo');
const footerYear = document.querySelector('.footer-year');

const showMenu = () => {
    navMenu.classList.toggle('showMenu');
    hamburgerBtn.classList.toggle('is-active');
    handleNavItemsAnimation();
    

}

const handleNavItemsAnimation = () => {
    let delayTime = 1;

    allNavItems.forEach(link => {
        link.classList.toggle('nav-items-animation')
        link.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    });
}




hamburgerBtn.addEventListener('click', showMenu);
const hideMenu = () => {
    allNavItems.forEach(link => {
        navMenu.classList.remove('showMenu')
        hamburgerBtn.classList.remove('is-active');
    });
};
navMenu.addEventListener('click', hideMenu);


const currentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

currentYear();
