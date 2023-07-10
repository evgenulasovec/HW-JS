// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

//Answer
// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href} `); 


// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):


// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).



// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)



//Answer

// const list = document.getElementById('list');
// const namesLi = list.getElementsByTagName ('li');

//2.1
// // for (let i = 0; i < namesLi.length; i++) {
// //   console.log(namesLi[i].innerText);
// // }

//2.2
// for (let i = 0; i < namesLi.length; i++) {
//     namesLi[i].innerText = i;
//     console.log(namesLi[i].innerText);
//   }
  
// Задание 3

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, 
// который найдет в HTML все элементы с классом "forRemove" и удалит их.

// document.querySelectorAll('.forRemove').remove(); --- почему это не работает?



