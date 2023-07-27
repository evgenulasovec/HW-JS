const nav = document.querySelector('nav'),
    button = document.querySelector('button'),
    contentBlocks = document.querySelectorAll('.tabs-wrapper > div');

nav.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const activeNumber = e.target.dataset.tab;
        contentBlocks.forEach(item => {
            button.classList.remove('active');
            item.classList.remove('active')
            contentBlocks[activeNumber].classList.add('active');
        });
    }
})

