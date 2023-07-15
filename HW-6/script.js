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

//Answer

// const forRemoves = document.querySelectorAll('.forRemove'); 
// console.log(forRemoves);
// forRemoves.forEach(e => e.remove());


// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: 
// размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

//Answer

// const paragraph = document.createElement('p');
// paragraph.innerText = 'Hello world';
// paragraph.style.fontSize = '36px';
// paragraph.style.fontWeight = '900';
// console.log(paragraph);
// document.body.append(paragraph);

// Задание 5

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. 
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое.
//  Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

//Answer

// const newTags = (tag, color, content) => {
//     const tagNew = document.createElement(`${tag}`);
//     tagNew.innerText = `${content}`
//     tagNew.style.color = `${color}`;
//     console.log(tagNew)
//     document.body.append(tagNew);
// }
// newTags('h1', 'blue', 'hello');
// newTags('h2', 'yellow', 'world');

// Задание 6

// Вставить в страницу (в html документ) тег <select>. 
// С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// Answer

// const yearsList = document.querySelector('select');

// for (let i = 1960; i <= 2020; i++) {
//     const option = document.createElement('option');
//     yearsList.append(option);
//     option.innerText = `${i}`;
// }


// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива),
//  статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// Answer
// const ordersUl = document.querySelector('.order');
// const clients = [

//     { name: "Женя", order: true },
//     { name: "Кристина", order: true },
//     { name: "Павел", order: false },
//     { name: "Виолетта", order: false },
//     { name: "Костя", order: true }

// ]

// clients.forEach(item => {
//     const li = document.createElement('li'); //<li></li>
//     const status = item.order ? 'оплатил' : 'отменил';
//     li.textContent = `Клиент ${item.name} ${status} заказ`;
//     ordersUl.append(li);
// })

// Задание 8

// Есть массив ссылок:

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")


// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


//Answer


// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// const div = document.createElement('div');
// div.style.background = 'violet';
// div.style.padding = '100px 40px'
// div.style.display = 'flex';
// div.style.gap = '40px';

// linksArr.forEach(a => {
//     const link = document.createElement('a');
//     link.href = `${a}`;
//     link.setAttribute('target', '_blank');
//     link.textContent = `${a} `;
//     link.style.textDecoration = 'none';
//     div.append(link);
// })

// document.body.append(div);

// Задание 9*

// Есть массив объектов с полями name, age. Например:

// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},

// {name:'Den', age: 43}
// ]

// Создать в html таблицу (table).

// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. 
// Имена должны быть красного цвета, age - синего.



// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, 
// сколько объектов внутри массива, и их количество может быть любым.

//Answer

// const table = document.querySelector('table');
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
    
//     {name:'Den', age: 43}
//     ]

//     users.forEach(user => {
//         const tr = document.createElement('tr');
//         const tdName = document.createElement('td');
//         const tdAge = document.createElement('td');
//         tdName.innerText = user.name;
//         tdName.style.color = 'red';
//         tdAge.innerText = user.age;
//         tdAge.style.color = 'blue';
//         tr.append(tdName) ;
//         tr.append(tdAge);
//         table.append(tr);
//     })


// Задание 10

// Написать в html тег заголовка с текстом "Сегодня:" После заголовка подготовить в html пустой параграф. 
// С помощью js добавить в него сегодняшнюю дату, пример: 27 октября 2022.


//Answer
// const now = document.querySelector('.date');
// let nowDate = new Date();
// let options = {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
// }
// now.append(nowDate.toLocaleString('ru-RU', options)); 