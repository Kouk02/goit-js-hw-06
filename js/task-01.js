const list = document.querySelector('#categories');
const item = list.querySelectorAll('.item');
console.log('Number of categories:', item.length);


item.forEach(element => { // рахуємо  кожен елемент li
  const name = element.firstElementChild; // шукаємо перші елементи класу item "h2"
  const elements = element.lastElementChild //шукаємо останні елементи "li"
  console.log(`Category: ${name.textContent}`);  // Виведемо інформацію в консоль
  console.log(`Elements: ${elements.children.length}`); //вказуємо дітей "li" нащадку "ul" їх кількість в довжині
}); 


