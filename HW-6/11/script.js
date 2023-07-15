const ulLists = document.querySelector('ul'),
    liGroups = document.querySelectorAll(' li'),
    links = document.querySelectorAll('a');

ulLists.classList.add('list');
for (let i = 0; i < liGroups.length; i = i + 2) {
    liGroups[i].classList.add('item');
}

links.forEach(e => e.classList.toggle('custom-link'));

