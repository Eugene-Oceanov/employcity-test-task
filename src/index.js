import "./assets/style/index.scss";

// burger menu 
const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

burgerBtn.onclick = () => {
    burgerBtn.classList.toggle("burger-menu__btn--active");
    burgerMenu.classList.toggle("burger-menu--show");
    overlay.classList.toggle("overlay--block");
    setTimeout(() => overlay.classList.toggle("overlay--show"), 0);
}

overlay.onclick = () => {
    burgerMenu.classList.remove("burger-menu--show");
    burgerBtn.classList.remove("burger-menu__btn--active");
    overlay.classList.remove("overlay--show");
    setTimeout(() => overlay.classList.remove("overlay--block"), 300);
}

// animations
window.onload = () => {
    document.querySelector(".main-text-block__title").classList.add("show");
    document.querySelector(".main-text-block__description").classList.add("show");
    document.querySelector(".main-text-block__list").classList.add("show");
    document.querySelector(".main-buttons-block").classList.add("show");
}

window.onscroll = () => {
    if (window.pageYOffset > 0 && window.pageYOffset < 150) {
        document.querySelector("#header").style.padding = "1.5em 0";
    } else if (window.pageYOffset > 150) { document.querySelector("#header").style.padding = ".5em 0"; }
}

const hiddenArr = document.querySelectorAll(".hidden");
function observerCallback(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}

const observerOptions = { threshold: [0.5] };
const observer = new IntersectionObserver(observerCallback, observerOptions);
hiddenArr.forEach(item => {
    observer.observe(item);
})

// select
const orderFormSelect = document.querySelector('.order-form-select');
const orderFormSelect_title = orderFormSelect.querySelector('.order-form-select__title');
const orderFormSelect_labels = orderFormSelect.querySelectorAll('.order-form-select__label');

orderFormSelect_title.addEventListener('click', () => {
    if ('active' === orderFormSelect.getAttribute('data-state')) {
        orderFormSelect.setAttribute('data-state', '');
    } else {
        orderFormSelect.setAttribute('data-state', 'active');
    }
});

for (let i = 0; i < orderFormSelect_labels.length; i++) {
    orderFormSelect_labels[i].addEventListener('click', (evt) => {
        orderFormSelect_title.textContent = evt.target.textContent;
        orderFormSelect.setAttribute('data-state', '');
    });
}

// range
const rangeInput = document.querySelector(".order-form-range-block__input");
const rangeOutput = document.querySelector(".order-form-range-block__value");
rangeInput.addEventListener("input", () => rangeOutput.textContent = `${rangeInput.value}%`);