const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 const ulElement = document.querySelector('.gallery'); // шукаємо список ul
 
images.forEach(image => { //Перераховуємо по одному об'єкту вмасиві
   
  const liElement = document.createElement('li'); //створюємо на кожен об'єкт свій li елемент
    liElement.classList.add('grid'); // до кожного li елемента додаємо клас grid з css
    const img = document.createElement('img'); // створюємо дочірній елемент img, вкладаючи його в li
    liElement.appendChild(img);
  

    img.setAttribute('src', image.url); //додаємо в кожен img по одному об'єкту з масиву
    img.setAttribute('alt', image.alt); 
 
  ulElement.insertAdjacentElement('beforeend', liElement); //вкладаємо весь список li в ul 'gallery'
});

console.log(ulElement)