const form = document.querySelector('.login-form'); // знаходимо форму
form.addEventListener('submit', onFormSubmit);  //ставимо слухача на кнопку submit

function onFormSubmit(event) { 
  event.preventDefault();  // прибираємо оновлення сторінки на кнопку submit коли натискаємо її

  const email = form.elements.email.value; //знаходимо значення полів
  const password = form.elements.password.value; //знаходимо значення полів

  if (email.trim() === "" || password.trim() === "") { // фіксуємо ведення полів на символи
    alert("Всі поля повинні бути заповнені!"); // ставимо alert у випадку якщо одне з полів не заповнене 
    return;
  }

  const info = { // створюємо об'єкт в який закладаємо введену інформацію в поля
    email: email,
    password: password,
  };
  console.log(info); // виводимо у консоль введену інформацію користувачем
  form.reset(); // очищаємо заповнені поля після їх сабміту
}

