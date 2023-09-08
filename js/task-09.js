function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color') // Знайшли кнопку зміни кольору
const spanColor = document.querySelector('.color') // знайшли текстове поле span

changeColor.addEventListener('click', () => { //створюємо функцію по кліку
      const random = getRandomHexColor(); //створюємо змінну з рандомним кольором
      document.body.style.backgroundColor = random; //вводимо в властивості body значення кольору = рандом
      spanColor.textContent = random;
    });