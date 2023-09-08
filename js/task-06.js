const inputEl = document.getElementById("validation-input");
const dataEl = parseInt(inputEl.getAttribute('data-length')); // виправлено помилку змінної 'input'
inputEl.addEventListener("blur", callback);

function callback() {
  const inputValue = inputEl.value;
  const inputLength = inputValue.length;

  if (inputLength === dataEl) {
    inputEl.classList.remove("invalid")
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}


