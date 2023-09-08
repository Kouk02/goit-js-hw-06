const inputName = document.getElementById('name-input'); //шукаємо
const spanName = document.getElementById('name-output'); // 

inputName.addEventListener('input', (event) => {
    spanName.textContent = event.currentTarget.value
    if (event.currentTarget.value.trim() === '') {
    spanName.textContent = 'Anonymous';
}
})




   




