const decBtn = document.querySelector('[data-action="decrement"]'); //Повертаємо ссилку на кнопку
  
const incBtn = document.querySelector('[data-action="increment"]'); //Повертаємо ссилку на кнопку
 
const value = document.getElementById('value'); //Повертаємо ссилку на id

  
  let counterValue = 0; // створили поточне значення лічильника 

decBtn.addEventListener('click', () => { //віднімаємо значення лічильника на 1
    counterValue -= 1;
    value.textContent = counterValue; // оновлюємо інтрефейс лічильника з новим значенням
  });

incBtn.addEventListener('click', () => { // Збільшіть значення лічильника на 1
    counterValue += 1;
    value.textContent = counterValue; // оновлюємо інтерфейс лічильника з новим значенням
  });

  