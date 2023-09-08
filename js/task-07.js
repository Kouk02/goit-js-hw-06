const fontSize = document.getElementById('font-size-control'); //шукаємо id input
const spanText = document.getElementById('text'); // шукаємо id span

function inputFontSize() { // робимо функцію в якій до нової змінної прибавляємо по 1 пікселю і додаємо це до спан тексту
    const font = fontSize.value + 'px';
    spanText.style.fontSize = font;
}
fontSize.addEventListener('input', inputFontSize) // добавляємо слухача 