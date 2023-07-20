const popupBtn = document.getElementById('popup-btn'),
    popup = document.getElementById('popup'),
    popupCont = document.getElementById('popup_content'),
    h2 = document.getElementById('h2');
    closeBtn = document.getElementById('close-btn');

popupBtn.addEventListener('click', (e) => {
    popup.classList.add('popup_opened');
})


closeBtn.addEventListener('click', (e) => {
    popup.classList.remove('popup_opened');
})

document.addEventListener('click', (e) => {
    if ((e.target === popup)) {
        popup.classList.remove('popup_opened');
    }

})