const list = document.querySelector('#categories');
const item = list.querySelectorAll('.item');
console.log('Number of categories:', item.length);


item.forEach((item) => { // рахуємо  кожен елемент li
  
  const name = item.querySelector('h2').textContent; // Знайдемо заголовок елемента 
  const elements = item.querySelectorAll('ul li'); // знаходимо кількість li
  
 
  console.log(`Category: ${name}`);  // Виведемо інформацію в консоль
  console.log(`Elements: ${elements.length}`);
});


