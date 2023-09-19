import "./assets/style/index.scss";

const selectSingle = document.querySelector('.order-form-select');
const selectSingle_title = selectSingle.querySelector('.order-form-select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.order-form-select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});
