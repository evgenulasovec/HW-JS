// const form = document.querySelector('form')
// form.addEventListener('submit',(event) => {
//     event.preventDefault();
//     console.log('hi');
//     const input = form.querySelector('.string');
//     console.log(input.value);
//     input.value = '';
// });


// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.


//Answer


// const input = document.querySelector('input'),
//     ulLists = document.querySelector('ul');

//     input.addEventListener('keyup', (event) =>{
//         const li = document.createElement('li');
//         li.innerText = event.key;
//         ulLists.append(li);
//     } )


// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, 
// как только клиент вписывает любой символ в поле (или стирает любой символ из поля). 
// Вам понадобится считывать значение поля, это input.value


//Answer

// const input = document.querySelector('input');


// input.addEventListener('keyup', (event) => {
//     event.preventDefault();
//     console.log(input.value);
// })

// Задание 3

// Создать в html форму с инпутом и кнопкой.Также добавить в html тег ul.Когда форма отправляется, добавлять в список тег li.
//  Его содержимое - введенный текст(input.value).После отправки формы инпут должен быть очищен(проставить пустую строку в value).

//Answer


// const form = document.querySelector('form'),
//     input = document.querySelector('input'),
//     ulLists = document.querySelector('ul');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const li = document.createElement('li');
//     li.innerText = input.value;
//     ulLists.append(li);
//     input.value = '';
// });

// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. 
// Добавить в html div. Внутри select будут options - арифметические знаки. 
// В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), 
// над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value).
//  Результат отображается в div.



// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)

//Answer

// const calcForm = document.querySelector('.calc'),
//     num1 = calcForm.querySelector('.num1'),
//     num2 = calcForm.querySelector('.num2'),
//     select = calcForm.querySelector('select'),
//     resultBlock = document.querySelector('.result'),
//     calcTitle = document.querySelector('h2');


// calcForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // const result = eval(`${num1.value} ${select.value} ${num2.value}`);
//     // console.log(result);

//     let result;
//     if(select.value === '+'){
//         result = Number(num1.value) + Number(num2.value);
//     } else
//     if(select.value === '-'){
//         result = Number(num1.value) - Number(num2.value);
//     } else 
//     if(select.value === '*'){
//         result = Number(num1.value) * Number(num2.value);
//     } else
//     result = Number(num1.value) / Number(num2.value);

//     resultBlock.innerText = result;
//     resultBlock.style.color = 'green';
//     resultBlock.style.fontSize = '20px';
    
// })


// calcTitle.addEventListener('mouseover', () => {
//     calcForm.style.background = 'yellow';
// })
// calcTitle.addEventListener('mouseout', () => {
//     calcForm.style.background = '';
// })



// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). 
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. 
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. 
// Использовать обработку событий mouseenter, mouseleave на этой кнопке.


//Answer

// const button = document.querySelector('.trans');

// function getRandomColor() {                     //функция взята из инета
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// button.addEventListener('mouseenter', () =>{
//     button.style.background = `${getRandomColor()}`;
// })

// function getRandomNumber() {                       // функция взята из инета
//     return Math.floor(Math.random() * 361) - 180;  
//   }
//   button.addEventListener('mouseleave', () =>{
//    button.style.rotate = `${getRandomNumber()}deg`;
// })
