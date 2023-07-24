const menu = document.querySelector('.menu'),
    openBtn = document.querySelector('.burger-btn'),
    closeBtn = document.querySelector('.close-btn'),
    input = document.querySelector('input'),
    inputWithBtn = document.querySelector('.input-with-icon');

console.log(menu);
document.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target === openBtn) {
        menu.classList.add('visible');
        closeBtn.classList.add('visible');

    }
    if (event.target === input) {
        inputWithBtn.classList.add('visible');
        input.classList.add('visible');

    }

    if (event.target === closeBtn) {
        menu.classList.remove('visible');
        closeBtn.classList.remove('visible');
        inputWithBtn.classList.remove('visible');
        input.classList.remove('visible');
    }

})

