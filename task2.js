// Отримуємо посилання на тег <p> та кнопку
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("styleButton");
// Додаємо обробник події для кнопки
buttonElement.addEventListener("click", changeCSS);

// Функція для зміни стилю тексту
function changeCSS() {
  // Змінюємо стиль тексту в тегу <p>
  textElement.style.color = "orange";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "Comic Sans MS";
}