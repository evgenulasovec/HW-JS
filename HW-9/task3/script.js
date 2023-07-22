const menu = document.querySelector('.menu'),
    block = document.querySelector('.block'),
    closeBtn = document.querySelector('.close-menu-btn'),
    openBtn = document.querySelector('.open-menu-btn');



document.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.matches('.open-menu-btn')) {

        block.classList.add('shift');
        menu.classList.add('visible');
        openBtn.classList.add('notvisible');
        closeBtn.classList.add('visible');
    }
    if (event.target.matches('.close-menu-btn')) {

        block.classList.remove('shift');
        menu.classList.remove('visible');
        openBtn.classList.remove('notvisible');
        closeBtn.classList.remove('visible');
    }
})
    