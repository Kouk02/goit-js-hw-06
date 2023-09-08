const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector('ul'); //шукаємо основний елемент ul в document
const ulWord = ingredients; //додаємо назви з масиву
for (let i = 0; i < ulWord.length; i++) { //знаходимо за допомогою циклу for кожен слово
  const liElement = document.createElement('li'); //створюємо в змінній елементи li
  liElement.classList.add('.item');// додаємо до кожного li елементу клас item
  liElement.textContent = ulWord[i]; //додаємо до елементів li назви з масиву які ми перерахували 
  ulElement.appendChild(liElement);//додаємо наші li елементи до ul списку 
}
console.log(ulElement)







